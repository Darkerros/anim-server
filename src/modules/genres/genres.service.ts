import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GenresModel } from '../../model/genres.model';

@Injectable()
export class GenresService {
  constructor(
    @InjectModel(GenresModel) private genresRepository: typeof GenresModel,
  ) {}

  async getAll() {
    return await this.genresRepository.findAll();
  }

  async getByName(name: string) {
    return await this.genresRepository.findOne({ where: { name: name } });
  }

  async updateGenre(id: number, name: string) {
    return await this.genresRepository.update(
      { name: name },
      { where: { id: id } },
    );
  }

  async createNewGenre(name: string) {
    return await this.genresRepository.findOrCreate({ where: { name: name } });
  }
}
