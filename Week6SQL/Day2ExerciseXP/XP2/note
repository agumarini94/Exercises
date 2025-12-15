CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)

SELECT * FROM SecondTab

Table1 – FirstTab
ID  Name
5   Pawan
6   Sharlee
7   Krish
NULL    Avtaar

Table2 – SecondTab
ID
5
NULL

//1 =   0 , because when is comparing with null, any element satisfied the condition. SQL can not be secure which element is diferent of null.

//2 = 2 because theres two elements of the first table that are not in the second table 

//3 = 0 // because when not in compare with an element null, any element satisfied the condition. 

//4 = 2 Because it counts how many rows from the first table are not present in the second table, considering only the non-NULL IDs.
In the second table there is only one non-NULL value, which is 5.
From the first table, only the rows with IDs 6 and 7 are not in the second table, since NULL is not counted.