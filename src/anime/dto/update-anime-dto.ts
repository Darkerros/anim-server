export interface UpdateAnimeDto {
  kodikId: string;

  shikimoryId: string;

  shikimoriRating: number;

  shikimoriVotes: number;

  kinopoiskId: string;

  kinopoiskRating: number;

  kinopoiskVotes: number;

  imdbId: string;

  imdbRating: number;

  imdbVotes: number;

  title: string;

  titleOrig: string;

  otherTitle: string;

  otherTitleEnList: string[];

  year: number;

  episodesCount: number;

  lastEpisode: number;

  kind: string; //"tv"

  status: string; //"released"

  description: string;

  posterUrl: string;

  screenshots: string[];

  duration: number;

  // genres: string[];
  episodesTotal: number;

  episodesAired: number;

  kodikDataId: number;
}