import AppError from '@shared/Error/AppError';
import FakeAnimesRepository from '../repositories/fakes/FakeAnimesRepository';
import UpdateAnimeService from './UpdateAnimeService';


describe("UpdateAnime", () => {
  it("Should be able to update anime", async () => {
    const fakeAnimesRepository = new FakeAnimesRepository();
    fakeAnimesRepository.seed();
    
    const updateAnime = new UpdateAnimeService(fakeAnimesRepository);
    const newAnime = await updateAnime.execute({ id: `anime-test-1`, name: 'Naruto' });
    expect(newAnime.name).toBe('Naruto');
  })

  it("Should fail when trying to update an inexistent anime", async () => {
    expect.assertions(1);
    const fakeAnimesRepository = new FakeAnimesRepository();
    fakeAnimesRepository.seed();
    
    const updateAnime = new UpdateAnimeService(fakeAnimesRepository);
    try {
      await updateAnime.execute({ id: `anime-test-xxxxx`, name: 'Naruto' });
    } catch(err) {
      expect(err).toBeInstanceOf(AppError);
    }
  })
});