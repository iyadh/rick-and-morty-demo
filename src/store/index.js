import { defineStore } from 'pinia';
// No manual syncRefs import needed when using the urlSyncPlugin with options store.
// The plugin enhances the store with the `urlSync` option.

export const useStore = defineStore('store', {
  state: () => ({
    characters: [],
    currentCharacter: {},
    isSearch: false,
    search: {
      name: '', // Default value, will be synced with URL 'name'
      status: '', // Default value, will be synced with URL 'status'
    },
    pagination: {
      count: 0,
      page: 1, // Default value, will be synced with URL 'page' by urlSync plugin
      pages: null,
      next: null,
      prev: null,
    },
  }),
  actions: {
    // searchCharacters will now primarily use the state that is synced with the URL.
    // It will be called by the urlSyncPlugin's handler when relevant URL params change.
    async searchCharacters() {
      // Values from store state, kept in sync with URL by the urlSync plugin
      const name = this.search.name;
      const status = this.search.status;
      const page = this.pagination.page;

      this.isSearch = Boolean(name || status);

      const queryParams = new URLSearchParams();
      if (name) queryParams.append('name', name);
      if (status) queryParams.append('status', status);
      // Ensure page is a string for URLSearchParams
      queryParams.append('page', String(page));

      const url = new URL(import.meta.env.VITE_MAIN_URL);
      url.search = queryParams.toString();

      try {
        const response = await fetch(url.toString());
        if (!response.ok) {
          // Try to parse error from JSON body if available
          let errorMsg = `HTTP error ${response.status}`;
          try {
            const errorData = await response.json();
            if (errorData && errorData.error) {
              errorMsg = errorData.error;
            }
          } catch (e) {
            // Ignore if error body is not JSON or parsing fails
          }
          throw new Error(errorMsg);
        }
        const data = await response.json();

        this.characters = data.results || []; // Ensure characters is always an array
        // Update pagination info from server.
        // The 'page' property in this.pagination will have been set by syncRefs
        // if the change originated from the URL. If the API call was for a specific page,
        // that 'page' is used. The server response (data.info) should be the source of
        // truth for count, pages, next, prev.
        this.pagination = {
          ...this.pagination, // Retain current page potentially set by syncRefs
          ...data.info, // Override with server's count, pages, next, prev
        };
        // If data.info contains a 'page' field, it might override our synced one.
        // It's often better to trust the API's pagination response fully.
        // If data.info reliably contains the current page number, use it:
        // this.pagination.page = data.info.page || page;
        // For now, let's assume data.info doesn't conflict badly or this.pagination.page is already correct.

      } catch (error) {
        console.error('searchCharacters error:', error);
        this.characters = [];
        // Preserve current search/page parameters in the store,
        // but reflect that the data fetch failed.
        this.pagination = {
          ...this.pagination, // Keep current page and other synced params
          count: 0,
          pages: null,
          next: null,
          prev: null,
          // Potentially add an error flag to pagination state if needed by UI
        };
      }
    },

    async fetchCurrentCharacter(id) {
      try {
        const response = await fetch(`${import.meta.env.VITE_MAIN_URL}/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        this.currentCharacter = data;
      } catch (error) {
          console.error('fetchCurrentCharacter error:', error);
        // router.push({ name: 'NotFound' });
        // Commented out as per previous reasoning; router instance not directly available here.
      }
    },
    resetCurrentCharacter() {
      this.currentCharacter = {};
    },
    initializePageReset() {
      // Initialize previous values from the current state when subscription starts
      let previousName = this.search.name;
      let previousStatus = this.search.status;

      this.$subscribe((mutation, state) => {
        // Ensure the mutation is for this specific store
        if (mutation.storeId === 'store') { // Replace 'store' if your storeId is different

          // Check if search name or status has actually changed
          const nameChanged = state.search.name !== previousName;
          const statusChanged = state.search.status !== previousStatus;

          if (nameChanged || statusChanged) {
            // If name or status changed, and page is not 1, reset page to 1
            if (state.pagination.page !== 1) {
              this.pagination.page = 1;
              // This change to pagination.page will be picked up by pinia-colada's
              // urlSync, which will update the URL. The urlSync.handler (searchCharacters)
              // will then be called with the new search terms and page 1.
            }
          }

          // After processing, update previousName and previousStatus to current state values
          // for the next subscription event.
          previousName = state.search.name;
          previousStatus = state.search.status;
        }
      });
    }
  },
  // Configuration for pinia-colada urlSyncPlugin
  urlSync: {
    params: [
      {
        name: 'name', // URL query parameter name
        path: 'search.name', // Store state path
        defaultValue: '',
      },
      {
        name: 'status',
        path: 'search.status',
        defaultValue: '',
      },
      {
        name: 'page',
        path: 'pagination.page',
        defaultValue: 1,
        type: Number, // Ensures the value from URL is cast to a Number for the store
      },
    ],
    // Handler to be called when the plugin updates store state from URL
    handler: (store) => {
      store.searchCharacters();
    },
    // Optional: router: useRouter(), // Not needed if plugin handles this or if using default router
    // Optional: debounce: 0,
    // Optional: writeDefaults: false,
  },
});

export default { useStore };
