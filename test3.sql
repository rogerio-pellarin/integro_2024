SELECT user.name, user.birthdate, customer.name FROM
user_customer
INNER JOIN customer ON customer.id = user_customer.customer_id
INNER JOIN user ON user.id = user_customer.user_id
WHERE DATEDIFF(YEAR, FechaNacimiento, GETDATE()) > 18 AND user.status = 1 AND customer.status = 1
ORDER BY customer.name ASC