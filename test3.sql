SELECT 
    user.name, 
    user.birthdate, 
    customer.name 
FROM 
    user inner join user_customer on(user.id = user_customer.user_id)
    inner join customer on(user_customer.customer_id = customer.id) 
WHERE 
    DATEDIFF(now(), user.birthdate) >= 18
    AND user.status = 1
    AND customer.status = 1
    AND user_customer.customer_id IS NOT NULL
ORDER BY customer.name ASC

