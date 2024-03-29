export interface ListResource {
  id: string;
  type: string;
  link: string;
  title: string;
  title_orig: string;
  other_title: string;
  last_episode: number;
  episodes_count: number;
  year: number;
  kinopoisk_id: string;
  imdb_id: string;
  worldart_link: string;
  shikimori_id: string;
  quality: string;
  camrip: boolean;
  lgbt: boolean;
  blocked_countries: string[];
  created_at: string;
  updated_at: string;
  screenshots: string[];

  material_data: MaterialData;
}

interface MaterialData {
  title: string;
  anime_title: string;
  title_en: string;
  other_titles: string[];
  other_titles_jp: string[];
  anime_kind: string;
  all_status: string;
  anime_status: string;
  year: number;
  tagline: string;
  description: string;
  anime_description?: string;
  poster_url: string;
  duration: number;
  countries: string[];
  all_genres: string[];
  genres: string[];
  anime_genres: string[];
  anime_studios: string[];
  kinopoisk_rating: number;
  kinopoisk_votes: number;
  imdb_rating: number;
  imdb_votes: number;
  shikimori_rating: number;
  shikimori_votes: number;
  premiere_world: string;
  aired_at: string;
  rating_mpaa: string;
  episodes_total: number;
  episodes_aired: number;
  actors: string[];
  directors: string[];
  producers: string[];
  writers: string[];
  composers: string[];
  editors: string[];
  designers: string[];
  operators: string[];
  screenshots: string[];
}
