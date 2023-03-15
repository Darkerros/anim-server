import { Injectable } from '@nestjs/common';
import {
  IKodikAnimesCreationAttr,
  KodikAnimeModel,
} from '../model/kodik-anime.model';
import { InjectModel } from '@nestjs/sequelize';
import { getList } from '../external-api/kodik/kodik';
import { ListResource } from '../external-api/kodik/types/list-resource';

@Injectable()
export class KodikService {
  constructor(
    @InjectModel(KodikAnimeModel)
    private kodikAnimeRepository: typeof KodikAnimeModel,
  ) {}

  async getAllAnimes() {
    let allData: ListResource[] = [];
    let pageToken = '';
    for (let i = 0; i < 100; i++) {
      console.log(pageToken);
      if (pageToken) {
        const res = await getList(pageToken);
        allData = [...allData, ...res.results];
        pageToken = res.next_page;
      } else {
        const res = await getList();
        allData = [...allData, ...res.results];
        pageToken = res.next_page;
      }
    }
    return allData;
  }

  async updateTable() {
    const data = await this.getAllAnimes();
    const formatData = formateListResourceToAnime(data);
    await this.kodikAnimeRepository.bulkCreate(formatData);
    return await this.kodikAnimeRepository.findAll();
  }
}

function formateListResourceToAnime(
  data: ListResource[],
): IKodikAnimesCreationAttr[] {
  return data.map((data) => ({
    kodikId: data.id,

    shikimoryId: data.shikimori_id,

    shikimoriRating: data.material_data?.shikimori_rating,

    shikimoriVotes: data.material_data?.shikimori_votes,

    kinopoiskId: data?.kinopoisk_id,

    kinopoiskRating: data.material_data?.kinopoisk_rating,

    kinopoiskVotes: data.material_data?.kinopoisk_votes,

    imdbId: data?.imdb_id,

    imdbRating: data.material_data?.imdb_rating,

    imdbVotes: data.material_data?.imdb_votes,

    title: data.title,

    titleOrig: data.title_orig,

    otherTitle: data.other_title,

    otherTitleEnList: data.material_data?.other_titles,

    year: data.year,

    episodesCount: data.episodes_count,

    lastEpisode: data.last_episode,

    kind: data.material_data?.anime_kind,

    status: data.material_data?.anime_status,

    description: data.material_data?.anime_description,

    posterUrl: data.material_data?.poster_url,

    screenshots: data.material_data?.screenshots,

    duration: data.material_data?.duration,

    episodesTotal: data.material_data?.episodes_total,

    episodesAired: data.material_data?.episodes_aired,
  }));
}