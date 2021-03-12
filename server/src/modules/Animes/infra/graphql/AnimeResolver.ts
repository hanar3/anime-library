import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql';
import { container } from 'tsyringe';
import ListAnimesService from "@modules/Animes/services/ListAnimesService";
import { Anime, IndexInput, PaginatedAnimesResponse, ShowInput, StoreInput, UpdateInput } from './Types';
import ShowAnimeService from '@modules/Animes/services/ShowAnimeService';
import AddAnimeService from '@modules/Animes/services/CreateAnimeService';
import UpdateAnimeService from '@modules/Animes/services/UpdateAnimeService';

@Resolver(Anime)
class AnimeResolver {
  @Query(() => PaginatedAnimesResponse)
  public async animes(@Arg('input') input: IndexInput): Promise<PaginatedAnimesResponse> {
    const listAnimes = container.resolve(ListAnimesService);
    const [items, total] = await listAnimes.execute({ take: input.limit, skip: input.page * input.limit });
    const totalPages = Math.round(total / input.limit);

    return {
      items,
      total,
      hasMore: input.page < totalPages,
    };
  }

  @Query(() => Anime)
  public async anime(@Arg('input') input: ShowInput): Promise<Anime> {
    const showAnime = container.resolve(ShowAnimeService);
    const anime = await showAnime.execute(input.id);
    return anime as Anime;
  }

  @Authorized()
  @Mutation(() => Anime)
  public async createAnime(@Arg('input') input: StoreInput): Promise<Anime> {
    const createAnime = container.resolve(AddAnimeService);
    const anime = await createAnime.execute(input);

    return anime as Anime;
  }

  @Authorized()
  @Mutation(() => Anime)
  public async updateAnime(@Arg('input') input: UpdateInput) {
    const updateAnime = container.resolve(UpdateAnimeService);
    const updatedAnime = await updateAnime.execute(input);
    return updatedAnime;
  }

}
export default AnimeResolver;