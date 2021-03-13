
import FakeAnimesRepository from '../repositories/fakes/FakeAnimesRepository';
import ListAnimesService from './ListAnimesService';

describe('ListAnimes', () => {
  it('Should be able to list the animes with pagination', async () => {
    const fakeAnimesRepository = new FakeAnimesRepository();
    fakeAnimesRepository.seed();
    
    const listAnimes = new ListAnimesService(fakeAnimesRepository);
    
    const page = 1;
    const limit = 10;
    
    const [animes, count] = await listAnimes.execute({ take: 10, skip: limit * page });

    expect(count).toBe(1200);
    expect(animes.length - 1).toBe(10);
  })
})