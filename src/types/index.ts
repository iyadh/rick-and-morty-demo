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

type CharacterStatus = 'Dead' | 'Alive' | 'unknown';
type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

interface Character {
  id: string;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  created: string;
}

type FormEvent = React.FormEvent<HTMLFormElement>;

export type { Pagination, CharacterLocation, Character, FormEvent };
