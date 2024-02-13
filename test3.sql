SELECT u.name, u.birthdate, c.name
FROM USER u, user_customer uc, customer c 
WHERE u.id=uc.user_id AND uc.customer_id=c.id AND (YEAR(DATE(CURDATE()))-YEAR(u.birthdate))-(RIGHT(DATE(CURDATE()),5)<RIGHT(u.birthdate,5))>18 AND u.status = 1 AND c.status = 1
ORDER BY c.name
