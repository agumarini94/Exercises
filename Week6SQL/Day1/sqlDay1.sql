-- CREATE TABLE items (
-- item_id SERIAL PRIMARY KEY, 
-- item_name VARCHAR(60) NOT NULL, 
-- item_price INTEGER 
-- );

-- CREATE TABLE customers (
-- customer_id SERIAL PRIMARY KEY, 
-- customer_name VARCHAR(50) NOT NULL,
-- customer_last_name VARCHAR(70) NOT NULL
-- );

-- SELECT * FROM items
-- SELECT * FROM customers 

-- 2) Todos los artículos con precio superior a 80 (80 no incluidos).
-- SELECT * FROM items WHERE product_price > 80

-- 3) Todos los artículos con un precio inferior a 300. (300 incluidos)
-- SELECT * FROM items WHERE product_price < 300

-- 4)Todos los clientes cuyo apellido sea 'Smith' (¿Cuál será su resultado?). --THERE'S NOT SMITH 
-- SELECT * FROM customers WHERE customer_apellido = 'Smith' 

-- 5) Todos los clientes cuyo apellido sea 'Jones'.
-- SELECT * FROM customers WHERE customer_apellido = 'Jones'

-- 6) Todos los clientes cuyo nombre no sea 'Scott'.
SELECT * FROM customers WHERE customer_name = 'Scott'





