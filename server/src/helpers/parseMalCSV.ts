import { readFileSync, writeFileSync } from "fs";

import { resolve } from "path";

export function parseMalCSV() {
  const parse = require("csv-parse/lib/sync");

  const csv = readFileSync(resolve(__dirname, "..", "data", "AnimeList.csv"), {
    encoding: "UTF-8",
  });

  const records = parse(csv, { columns: true });
  writeFileSync(
    resolve(__dirname, "..", "data", "animes.json"),
    JSON.stringify(records)
  );
}
