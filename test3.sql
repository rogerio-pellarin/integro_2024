SELECT user.name AS user_name, user.birthdate, customer.name AS customer_name
FROM user
JOIN customer ON user.customer_id = customer.id
WHERE user.status = 1
AND customer.status = 1
AND user.birthdate <= DATE_SUB(CURDATE(), INTERVAL 18 YEAR)
ORDER BY customer.name;