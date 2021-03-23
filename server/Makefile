up: ; docker-compose -f docker-compose.yml --env-file ./.env up $(c)
migrate: ; yarn typeorm migration:run $(c)
down: ; docker-compose -f docker-compose.yml down $(c)
seed: ; node ./src/shared/database/seeders/index.js $(c)