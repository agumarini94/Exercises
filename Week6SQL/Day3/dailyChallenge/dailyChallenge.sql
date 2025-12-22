-- CREATE TABLE customer (
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL
-- );
-- CREATE TABLE customer_profile (
-- 	id SERIAL PRIMARY KEY, 
-- 	isLoggedIn BOOLEAN DEFAULT false, 
-- 	customer_id INT UNIQUE, 
-- 	CONSTRAINT fk_customer
-- 		FOREIGN KEY (customer_id)
-- 		REFERENCES Customer(id)
-- 		ON DELETE CASCADE
-- );

--2 INSERT CUSTOMERS 
-- INSERT INTO customer( first_name, last_name) 
-- VALUES ('John', 'Doe'),
--     ('Jerome', 'Lalu'),
--     ('Lea', 'Rive');

-- -- INSERT CUSTOMER PROFILE 
-- INSERT INTO customer_profile (isLoggedIn, customer_id)
-- VALUES 
-- 	(
-- 		true,
-- 		(SELECT id FROM customer WHERE first_name = 'John' AND last_name = 'Doe')
-- 	),
-- 	(
-- 	false,
-- 	(SELECT id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu')
-- 	);

--USE JOIN TO DISPLAY... 
--FIRST_NAME 
-- SELECT customer.first_name FROM customer 
-- INNER JOIN customer_profile 
-- ON customer.id = customer_profile.customer_id
-- WHERE customer_profile.isLoggedIn = true; 

--ALL CUSTOMERS INCLUSO LOS Q NO TIENEN PERFIL 
-- SELECT customer.first_name, customer_profile.isLoggedIn 
-- FROM customer 
-- LEFT JOIN customer_profile
-- ON customer.id = customer_profile.customer_id;

--CUSTOMER THAR ARE NOT LOGGIN 
-- SELECT COUNT(*) AS not_logged_id_customers 
-- FROM customer
-- LEFT JOIN customer_profile
-- ON customer_id = customer_profile.customer_id
-- WHERE customer_profile.isLoggedIn = false
-- 	OR customer_profile.isLoggedIn IS NULL;
	
--PARTE 2 
--1 CREATE TABLE BOOK.. 
-- CREATE TABLE book (
-- book_id SERIAL PRIMARY KEY, 
-- 	title VARCHAR(255) NOT NULL,
-- 	author VARCHAR(255) NOT NULL
-- );

--2 INSERT THE BOOKS 
-- INSERT INTO book (title, author)
-- VALUES 
--     ('Alice In Wonderland', 'Lewis Carroll'),
--     ('Harry Potter', 'J.K Rowling'),
--     ('To kill a mockingbird', 'Harper Lee');

--3 create table students
-- CREATE TABLE student (
-- student_id SERIAL PRIMARY KEY,
-- name VARCHAR(100) NOT NULL UNIQUE,
-- age INT CHECK(age <=15)
-- );

--4 Insert students on student table
-- INSERT INTO student (name, age)
-- VALUES 
--  ('John', 12),
--     ('Lera', 11),
--     ('Patrick', 10),
--     ('Bob', 14);

--5 Table library 
-- CREATE TABLE library(
-- 	book_fk_id INT, 
-- 	student_fk_id INT, 
-- 	borrowed_date DATE, 
-- 	PRIMARY KEY (book_fk_id, student_fk_id), 
-- 	FOREIGN KEY (book_fk_id) 
-- 		REFERENCES book(book_id)
-- 		ON DELETE CASCADE
-- 		ON UPDATE CASCADE,
-- 	FOREIGN KEY (student_fk_id)
-- 		REFERENCES student(student_id)
-- 		ON DELETE CASCADE
-- 		ON UPDATE CASCADE
-- );

--6 ADD 4 REGISTERS IN THE JUNCTION TABLE 
-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES 
-- (
--     (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'), -- "In" mayúscula
--     (SELECT student_id FROM student WHERE name = 'John'),
--     '2022-02-15'
-- ),
-- (
--     (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
--     (SELECT student_id FROM student WHERE name = 'Bob'),
--     '2021-03-03'
-- ),
-- (
--     (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'), -- "In" mayúscula
--     (SELECT student_id FROM student WHERE name = 'Lera'),
--     '2021-05-23'
-- ),
-- (
--     (SELECT book_id FROM book WHERE title = 'Harry Potter'),
--     (SELECT student_id FROM student WHERE name = 'Bob'),
--     '2021-08-12'
-- );

--PART 7 DISPLAY THE DATA 
-- SELECT * FROM library

-- Name of the student and the books
-- SELECT student.name, book.title
-- FROM library
-- INNER JOIN student 
-- 	ON library.student_fk_id = student.student_id
-- INNER JOIN book 
-- 	ON library.book_fk_id = book.book_id;
	
--AVERAGE AGE OF THE CHILDREN THAT BORROWER A BOOK ALICE..
SELECT AVG(student.age) AS average_age
FROM library 
INNER JOIN student 
	ON library.student_fk_id = student.student_id
INNER JOIN book 
	ON library.book_fk_id = book.book_id
WHERE book.title = 'Alice In Wonderland';


--DELETE A STUDENT FROM STUDENT TABLE 
-- DELETE FROM student
-- WHERE name = 'John';
-- DELETE ALL THE REGISTER RELATIONATED WITH JOHN BECAUSE ON DELETE CASCADE ON STUDENT_FK_ID

