#POSTGRESS

# install postgres
docker run \
  --name postgres \
  -e POSTGRES_USER=makiessemorais  \
  -e POSTGRES_PASSWORD="senha0001" \
  -e POSTGRES_DB=heroes \
  -p 5432:5432 \
  -d \
  postgres

# use postgres container
docker logs postgres
docker exec -it postgres psql --username makiessemorais --dbname heroes

# create database
CREATE TABLE warriors(id serial PRIMARY KEY, name VARCHAR (255) NOT NULL);
SELECT * FROM warriors;

#MONGODB

docker run \
  --name mongodb \
  -e MONGO_INITDB_ROOT_USERNAME=makiessemorais \
  -e MONGO_INITDB_ROOT_PASSWORD="senha0002" \
  -p 27017:27017 \
  -d \
  mongo:4

docker logs mongodb