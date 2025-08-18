interface Search {
  name: string;
  status: string;
}

interface Pagination {
  count: number;
  page: number;
  pages?: number;
  next?: string;
  prev?: string;
}

interface CharacterLocation {
  name: string;
  url: string;
}

interface Character {
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

export type { Search, Pagination, CharacterLocation, Character };
