import FakeAnimesRepository from "../repositories/fakes/FakeAnimesRepository";
import CreateAnimeService from "./CreateAnimeService";

describe("CreateAnime", () => {
  it("Should be able to create a new anime", async () => {
    const fakeAnimesRepository = new FakeAnimesRepository();
    const createAnime = new CreateAnimeService(fakeAnimesRepository);
    const anime = await createAnime.execute({
      name: "Naruto",
      englishName: "Naruto",
      episodes: 25,
      status: "Airing",
      description: "Some description",
      japaneseName: 'Naruto'
    });

    expect(anime).toHaveProperty('id');
    expect(anime.name).toBe('Naruto');
  });
});
