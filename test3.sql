SELECT
    user.name AS user_name, -- Selecting user's name
    user.birthdate, -- Selecting user's birthdate
    customer.name AS customer_name -- Selecting customer's name
FROM
    user
JOIN
    user_customer ON user.id = user_customer.user_id -- Joining user and user_customer tables based on user_id
JOIN
    customer ON user_customer.customer_id = customer.id -- Joining customer table based on customer_id
WHERE
    user.birthdate <= DATE_SUB(CURDATE(), INTERVAL 18 YEAR) -- Users older than 18 years
    AND user.status = 1 -- Users with status = 1
    AND customer.status = 1 -- Customers with status = 1
ORDER BY
    customer.name; -- Ordering results by customer's name
