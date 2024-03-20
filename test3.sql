SELECT usr.name AS usr.birthdate, user_name, cust.name AS customer_name
FROM user AS usr
JOIN user_customer AS uc ON usr.id = uc.user_id
JOIN customer AS cust ON uc.customer_id = cust.id
WHERE TIMESTAMPDIFF(YEAR, usr.birthdate, CURDATE()) >= 18 AND usr.status = 1 AND cust.status = 1 
ORDER BY cust.name;