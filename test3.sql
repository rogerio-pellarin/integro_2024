SELECT user.name, user.birthdate, customer.name 
FROM ((`user` 
INNER JOIN `user_customer` ON user.id = user_customer.user_id) 
INNER JOIN `customer` ON user_customer.customer_id = customer.id)
WHERE user.status = 1 AND customer.status = 1 AND timestampdiff(YEAR,user.birthdate,CURDATE()) > 18
ORDER BY customer.name;