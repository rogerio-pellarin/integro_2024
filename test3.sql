SELECT u.name AS user_name, u.birthdate AS user_date, c.name AS customer_name 
FROM user u
INNER JOIN user_customer uc ON uc.user_id = u.id 
INNER JOIN customer c ON c.id = uc.customer_id
WHERE u.status = 1 AND c.status = 1 AND (TIMESTAMPDIFF(YEAR, u.birthdate, CURDATE()) >= 18)
ORDER BY c.name;