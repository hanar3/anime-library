import AppError from '@shared/Error/AppError';
import FakeAnimesRepository from '../repositories/fakes/FakeAnimesRepository';
import ShowAnimeService from './ShowAnimeService';

describe("ShowAnime", () => {
  it("Should be able to get an anime by id", async () => {
    const fakeAnimesRepository = new FakeAnimesRepository();
    fakeAnimesRepository.seed();
    const showAnime = new ShowAnimeService(fakeAnimesRepository);
    const anime = await showAnime.execute('anime-test-1');
    expect(anime.id).toBeDefined();
  })

  it("Should fail when an invalid id is passed", async () => {
    expect.assertions(1);
    try{
      const fakeAnimesRepository = new FakeAnimesRepository();
      fakeAnimesRepository.seed();
      const showAnime = new ShowAnimeService(fakeAnimesRepository);
      await showAnime.execute('anime-test-xxxx');
    } catch(err) {
      expect(err).toBeInstanceOf(AppError);
    }
  })
})