-- 1) Get a list of all the languages, from the language table.
-- SELECT name FROM language

--2) Get a list of all films joined with their languages – select the following details : film title, description, and language name.
-- SELECT title, description, name AS language
-- FROM film
-- INNER JOIN language 
-- ON film.language_id = language.language_id 

-- 3) Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
-- SELECT title, description, name AS Language
-- FROM film 
-- RIGHT JOIN language 
-- ON film.language_id = language.language_id

--4) Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- CREATE TABLE new_film (
-- id_film SERIAL PRIMARY KEY,
-- name VARCHAR(100) NOT NULL
-- )
-- INSERT INTO new_film (name)
-- VALUES 
-- ('Marley and me'),
-- ('Shrek'), 
-- ('Matilda')

-- SELECT * FROM new_film

-- 5) Create a new table called customer_review, which will contain film reviews that customers will make.
-- CREATE TABLE customer_review (
-- review_id SERIAL PRIMARY KEY, 
-- film_id INTEGER, --Primero tengo que crear la columna, y luego la declaro como FK.
-- language_id INTEGER,  
-- title VARCHAR(100),
-- score SMALLINT CHECK(score >=0 AND  score <=10), --Check asegura que solo se guarden valores entre 0 y 10 
-- review_text TEXT, -- no tiene limite de escritura
-- last_update DATE, --Para agregar la feha mes , dia , año
-- FOREIGN KEY (film_id) REFERENCES new_film(id_film) ON DELETE CASCADE --y cuando borre un film, de la tabla film, automaticamente va a borrar el review
-- )
-- DROP TABLE IF EXISTS customer_review;

-- SELECT * FROM customer_review
-- SELECT * FROM film
--6)Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- SELECT * FROM language
-- SELECT * FROM new_film
-- INSERT INTO customer_review(film_id,language_id, title, score, review_text, last_update)
-- VALUES 
-- (
-- 	(SELECT id_film FROM new_film WHERE name = 'Shrek'),
-- 	(SELECT language_id FROM language WHERE name = 'English'),
-- 	'Good review', 9, 'Was soo good film and very funny', '12-12-2012'),
-- (
-- 	(SELECT id_film FROM new_film WHERE name = 'Matilda'),
-- 	 (SELECT language_id FROM language WHERE name = 'English'),
-- 	 'Bad review', 4, 'The film was so boring', '01-11-2023')

-- select * from customer_review

--7) Delete a film that has a review from the new_film table, what happens to the customer_review table?
SELECT * FROM customer_review ;
-- SELECT * FROM new_film
-- SELECT * FROM film
-- DELETE FREOM new_film WHERE id_film = 1
-- is deleting also the review on costumer review. 

