SELECT u.name AS nombre_usuario,
       u.birthdate AS fecha_nacimiento,
       c.name AS nombre_cliente
FROM user u
JOIN user_customer uc ON u.id = uc.user_id
JOIN customer c ON uc.customer_id = c.id
WHERE TIMESTAMPDIFF(YEAR, u.birthdate, CURDATE()) > 18
  AND u.status = 1
  AND c.status = 1
ORDER BY c.name;
