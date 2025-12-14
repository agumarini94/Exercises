-- SELECT * FROM actors 
--1. Count how many actors are in the table.
-- SELECT COUNT(actors) FROM actors 
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
-- ANSWER => IS NOT POSIBLE BECAUSE I SHOULD SEND THE VALUES. 
INSERT INTO actors (first_name, last_name, birth_date, oscars) VALUES (
('Juan' , '12/06/1945'), 
('Marcos', 'Rolon', '10/10/1910', 3);