import { Injectable, Logger } from '@nestjs/common';
import {
  IKodikAnimesCreationAttr,
  KodikAnimeModel,
} from '../model/kodik-anime.model';
import { InjectModel } from '@nestjs/sequelize';
import { getList } from '../external-api/kodik/kodik';
import { ListResource } from '../external-api/kodik/types/list-resource';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class KodikService {
  private readonly logger = new Logger(KodikService.name);

  constructor(
    @InjectModel(KodikAnimeModel)
    private kodikAnimeRepository: typeof KodikAnimeModel,
  ) {}

  async getAllAnimesFromApi() {
    let allData: ListResource[] = [];
    let resp = await getList();
    allData = [...resp.results];
    while (resp.next_page) {
      resp = await getList(resp.next_page);
      allData = [...allData, ...resp.results];
    }
    return allData;
  }

  async getAllAnimes() {
    return this.kodikAnimeRepository.findAll();
  }

  @Cron('0 */30 * * * *')
  async updateTable() {
    this.logger.debug('Start update table');
    const data = await this.getAllAnimesFromApi();
    this.logger.debug('Load data from kodik api');
    const formatData = formateListResourceToAnime(data);
    await this.kodikAnimeRepository.destroy({});
    await this.kodikAnimeRepository.bulkCreate(formatData);
    this.logger.debug('Complete update kodik data');
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
