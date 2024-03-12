SELECT u.name AS user_name, u.birthday, c.name AS customer_name
FROM user u
RIGHT JOIN user_customer uc ON u.id = uc.user_id
INNER JOIN customer c ON uc.customer_id = c.id
WHERE DATE_SUB(NOW(), INTERVAL 18 YEAR) >= u.birthday
AND u.status = 1
AND c.status = 1
ORDER BY c.name ASC