SELECT
    user.name AS user_name,
    user.birthdate,
    customer.name AS customer_name
FROM
    user
JOIN
    user_customer ON user.id = user_customer.user_id
JOIN
    customer ON user_customer.customer_id = customer.id
WHERE
    user.birthdate < CURRENT_DATE - INTERVAL '18 year'
    AND user.status = 1
    AND customer.status = 1;