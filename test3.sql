SELECT
    u.name AS user_name,
    u.birthdate,
    c.name AS customer_name
FROM
    [user] u
JOIN
    user_customer uc ON u.id = uc.user_id
JOIN
    customer c ON uc.customer_id = c.id
WHERE
    u.status = 1
    AND u.birthdate <= DATEADD(YEAR, -18, GETDATE())
    AND c.status = 1
ORDER BY
    c.name;