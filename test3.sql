SELECT u.name AS user_name, u.birthdate, c.name AS customer_name
FROM users u
INNER JOIN customers c ON u.user_id = c.user_id
WHERE u.status = 1 
AND c.status = 1
AND u.birthdate > 18
ORDER BY c.name;