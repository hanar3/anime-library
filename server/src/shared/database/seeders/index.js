require("dotenv/config");
const { Client } = require("pg");
const data = require("../data/animes.json");

const client = new Client({
  user: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: "localhost",

  port: 5432,
});


async function main() {
  try {
    await client.connect();
    const animes = data.database.anime;
;
    animes.forEach((anime) => {
      client.query(
        'INSERT INTO animes("name", "englishName", "japaneseName", "description", "episodes", "status") VALUES($1, $2, $3, $4, $5, $6)',
        [
          anime.title?.__cdata ?? "",
          anime.english?.__cdata ?? "",
          anime.japanese?.__cdata ?? "",
          anime.synopsis?.__cdata ?? "",
          anime.episode_count,
          "Unknown",
        ],
        (err, res) => {
          if (err) {
            console.log(err);
            throw err;
          }
        }
      );
    });
    await client.end();

  } catch(err) {
    throw err;

  }
}

main();
