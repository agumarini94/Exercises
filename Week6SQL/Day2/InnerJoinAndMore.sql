-- JOINS IN SQL 

-- INNER JOIN = SHOWS JUST RELATED DATA (NOT NULL VALUES)

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors 
-- INNER JOIN movies 
-- ON actors_id = actor_playing_id
-- no crea una nueva tabla, solo muestra 

--FULL JOIN = SHOWS ALL THE DATA FROM BOTH TABLES (EVEN IF NULL)
-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- FULL JOIN movies
-- ON actors_id = actor_playing_id

-- LEFT JOIN = SHOWS ALL THE DATA FROM THE LEFT TABLE 
-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors 
-- LEFT JOIN movies
-- ON actors_id = actor_playing_id 

-- RIGHT JOIN = SHOWS ALL THE DATA FROM THE RIGHT TABLE
SELECT actors.first_name, actors.last_name, movies.movie_title
FROM actors
RIGHT JOIN movies
ON actors_id = actor_playing_id