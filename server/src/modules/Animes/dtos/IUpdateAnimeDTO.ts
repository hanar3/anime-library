export default interface IUpdateAnimeDTO {
  id: string;
  name?: string;
  englishName?: string;
  description?: string;
  japaneseName?: string;
  episodes?: number;
  status?: string;
}
