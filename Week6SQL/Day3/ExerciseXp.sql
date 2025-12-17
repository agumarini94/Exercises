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
-- SELECT * FROM customer_review ;
-- SELECT * FROM new_film
-- SELECT * FROM film
-- DELETE FREOM new_film WHERE id_film = 1
-- is deleting also the review on costumer review. 


----***>  EXERCISE 2 <***------
--1) Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- UPDATE film SET language_id = 2
-- WHERE title IN
-- ('Chamber Italian', 'Airport Pollock' , 'Agent Truman')
-- SELECT * FROM film WHERE language_id =2 

--2) Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- FK --> store_id , address_id , 
--when we add a new store, autoincrement the store_id and address_id.. 

-- 3) We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- select * from customer_review
-- DROP TABLE IF EXISTS customer_review;
-- select * from customer_review 
-- is posible because its declarated like Cascade. 

--4) Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- SELECT * FROM rental WHERE return_date IS NULL -- trae las que aun no tienen fecha de return.

--5) Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- SELECT rental.rental_date, rental.customer_id, reNtal.return_date,  film.rental_rate
-- FROM rental --FIRST NEED CONECT WITH INVENTORY BECAUSE HAS RELATION WITH BOTH TABLES.
-- INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id 
-- INNER JOIN film ON inventOry.film_id = film.film_id
-- WHERE rental.return_date IS NULL 
-- ORDER BY film.rental_rate DESC 
-- LIMIT 30 

--6)The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
-- SELECT film.title, film.description, actor.first_name, actor.last_name 
-- FROM film
-- INNER JOIN film_actor ON film.film_id = film_actor.film_id 
-- INNER JOIN actor ON film_actor.actor_id = actor.actor_id
-- WHERE actor.first_name = 'Penelope'
-- AND actor.last_name = 'Monroe'
-- AND (film.description ILIKE '%wrestler%' OR film.description ILIKE '%sumo%')

--6.2 The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- SELECT film.title, film.rental_duration, film.length from film 
-- WHERE title LIKE 'R%'
-- AND length <=60
-- select * from film
-- 6.3 -- The 3rd film: He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT film.title, film.rental.duration, film.rental_rate, return_date FROM film 
