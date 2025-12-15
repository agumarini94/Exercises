-- Create a database called bootcamp.
-- Create a table called students.
-- Add the following columns:
-- id
-- last_name
-- first_name
-- birth_date
-- The id must be auto_incremented.
-- Make sure to choose the correct data type for each column.
-- To help, here is the data that you will have to insert. (How do we insert a date to a table?)
-- CREATE TABLE students (
-- student_id SERIAL PRIMARY KEY, 
-- st_last_name VARCHAR(70), 
-- st_first_name VARCHAR(50), 
-- st_birth_date DATE
-- );

-- INSERT INTO students (st_last_name, st_first_name, st_birth_date) VALUES
-- ('Benichou', 'Marck', '1998-11-02'),
-- ('Cohen', 'Yoan', '2010-12-03'),
-- ('Benichou', 'Lea', '1987-07-27'),
-- ('Dux', 'Amelia', '1996-04-07'),
-- ('Grez', 'David', '2003-06-14'),
-- ('Simpson', 'Omer', '1980-10-03'),
-- ('Marini', 'Agustin', '1994-06-15');

-- 1) Fetch all of the data from the table.
-- SELECT * FROM students 

-- 2)Fetch all of the students first_names and last_names.
-- SELECT st_first_name, st_last_name FROM students

-- 3) 1)Fetch the student which id is equal to 2.
-- SELECT * FROM students WHERE student_id = 2

-- 3) 2) Fetch the student whose last_name is Benichou AND first_name is Marc.
-- SELECT * FROM students WHERE st_last_name = 'Benichou' AND st_first_name = 'Marck'

-- 3) 3) Fetch the students whose last_names are Benichou OR first_names are Marc.
-- SELECT * FROM students WHERE st_last_name = 'Benichou' OR st_first_name = 'Marck'

-- 3) 4) Fetch the students whose first_names contain the letter a.
-- SELECT * FROM students WHERE st_first_name LIKE '%a%'

-- 3) 5)Fetch the students whose first_names start with the letter a.
-- SELECT * FROM students WHERE st_first_name ILIKE 'a%'

-- 3) 6) Fetch the students whose first_names end with the letter a.
-- SELECT * FROM students WHERE st_first_name LIKE '%a'

-- 3) 7) Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- SELECT st_first_name FROM students WHERE st_first_name LIKE '%a_'
-- %A_ ---> _ signfica, x letra , es decir 1 caracter despuesd e la a 

-- 3) 8) Fetch the students whose id’s are equal to 1 AND 3 .
-- SELECT * FROM students WHERE student_id IN (1, 3)
-- IN --> para una condicion multiples condiciones .

-- 4) Fetch the students whose birth_dates are equal to or come after 1/01/2000. 
-- SELECT * FROM students WHERE st_birth_date >= '01,01,2000'

-- EXERCISE XP GOLD 
-- 1)Fetch the first four students. You have to order the four students alphabetically by last_name.
-- SELECT * FROM students WHERE student_id <=4 ORDER BY st_last_name LIMIT 4

-- 2) Fetch the details of the youngest student.
-- SELECT * FROM students ORDER BY st_birth_date DESC LIMIT 1

-- 3) Fetch three students skipping the first two students.
SELECT * FROM students lIMIT 3 OFFSET 2