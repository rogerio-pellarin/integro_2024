SELECT
    u.name AS user_name,
    u.birthdate AS birth_date,
    c.name AS customer_name
FROM
    user AS u
INNER JOIN
    user_customer AS uc ON u.id = uc.user_id
INNER JOIN
    customer AS c ON uc.customer_id = c.id
WHERE
    u.birthdate <= DATE_SUB(CURDATE(), INTERVAL 18 YEAR)
    AND u.status = 1
    AND c.status = 1
ORDER BY
    c.name;