-- FOREIGN KEY EXAMPLE 

-- CREATE TABLE movies(
-- movie_id SERIAL, 
-- movie_title VARCHAR (100) NOT NULL, 
-- movie_story TEXT, 
-- actor_playing_id INTEGER, 
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actors_id)
-- )

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id)
-- VALUES 
-- ('Good Will hunting', 'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
-- (SELECT actors_id FROM actors WHERE first_name = 'Matt' AND last_name = 'Damon' )

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) 
-- VALUES ('Oceans Eleven', 'American heist film directed by Steven Soderbergh and written by Ted Griffin.',
-- (SELECT actors_id FROM actors WHERE first_name = 'Mat' AND last_name = 'Damon' ));

INSERT INTO movies (movie_title, movie_story, actor_playing_id) 
VALUES 
('The davil wears Prada', 'A fashion bla bla bla ... ', 
(SELECT FROM actors WHERE first_name = 'Meryl' AND last_name = 'Streep'),
('Harry Potter', 'Harry was a magician very good bla bla bla...'),(NULL));

DELETE FROM movies WHERE movie_title = 'Ocean eleven'
select * FROM movies 

