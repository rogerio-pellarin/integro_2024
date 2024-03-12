SELECT u.name, u.birthdate, c.name
FROM user u
INNER JOIN user_customer uc ON u.id = uc.user_id
INNER JOIN customer c ON uc.customer_id = c.id
WHERE 
    u.status = 1 AND 
    c.status = 1 AND
    (YEAR(NOW()) - YEAR(u.birthdate)) > 18
ORDER BY c.name;

