-- CREATE TABLE country (
-- country_id SERIAL PRIMARY KEY,
-- country_name VARCHAR(50) NOT NULL
-- );

-- INSERT INTO country (country_name)
-- VALUES ('Israel'), ('Argentina'), ('Brazil'), ('Ucraine')

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors 
-- INNER JOIN movies 
-- ON actors_id = actor_playing_id
-- no crea una nueva tabla, solo muestra 

-- SELECT * FROM country

-- SELECT country.country_name, country.country_id, actors.first_name, actors.actors_id
-- FROM country 
-- FULL JOIN actors
-- ON actors_id = country_id

--ALIAS 
-- SELECT first_name || ' ' || last_name AS full_name FROM actors


-- AGREGATE FUNCTIONS 
-- SELECT COUNT (*) FROM actors

-- SELECT AVG(oscars) AS average_oscars FROM actors

-- SELECT MIN (oscars) FROM actors
-- SELECT first_name, last_name, oscars
-- FROM actors
-- WHERE oscars = --minimo de oscars de la tabla actors
-- (SELECT MIN (oscars) FROM actors)

-- SELECT SUM(oscars) AS total_actors FROM actors 
--entre parentesis elijo la columna que quiero sumar ..

