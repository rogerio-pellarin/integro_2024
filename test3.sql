select u.name, u.birthdate, c.name from user as u
inner join user_customer as uc ON uc.user_id = u.id
inner join customer as c ON uc.customer_id = c.id
where u.birthdate <= DATE_SUB(CURDATE(), INTERVAL 18 YEAR)
and u.status = 1
and c.status = 1
order by c.name


-- Testing DB
-- Tabla 'user'
-- CREATE TABLE user (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(50),
--     birthdate DATE,
--     status TINYINT DEFAULT 1
-- );

-- -- Tabla 'customer'
-- CREATE TABLE customer (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(50),
--     status TINYINT DEFAULT 1
-- );

-- -- Tabla 'user_customer' (tabla de relación entre 'user' y 'customer')
-- CREATE TABLE user_customer (
--     user_id INT,
--     customer_id INT,
--     FOREIGN KEY (user_id) REFERENCES user(id),
--     FOREIGN KEY (customer_id) REFERENCES customer(id)
-- );

-- -- Inserts de ejemplo para 'user'
-- INSERT INTO user (name, birthdate) VALUES
-- ('Lorena', '1988-03-15'),
-- ('Pedro', '2010-11-25'),
-- ('Juan', '1985-09-10');

-- -- Inserts de ejemplo para 'customer'
-- INSERT INTO customer (name) VALUES
-- ('Sura'),
-- ('Metro'),
-- ('EPM');

-- -- Inserts de ejemplo para 'user_customer'
-- INSERT INTO user_customer (user_id, customer_id) VALUES
-- (1, 1), -- Lorena es cliente de Sura
-- (2, 2), -- Pedro es cliente de Metro
-- (3, 3); -- Juan es cliente de EPM
