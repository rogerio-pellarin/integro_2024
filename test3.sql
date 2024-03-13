SELECT u.name AS user_name, u.birthdate, c.name AS customer_name
FROM user AS u
JOIN user_customer AS uc ON u.id = uc.user_id
JOIN customer AS c ON uc.customer_id = c.id
WHERE u.status = 1
AND c.status = 1
AND u.birthdate <= DATE_SUB(CURRENT_DATE(), INTERVAL 18 YEAR)
ORDER BY c.name;