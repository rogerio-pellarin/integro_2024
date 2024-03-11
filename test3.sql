SELECT
    u.name AS user_name,
    u.birthdate,
    c.name AS customer_name
FROM
    [user] u
JOIN
    customer c ON EXISTS (
        SELECT 1
        FROM user_customer uc
        WHERE uc.user_id = u.id
          AND uc.customer_id = c.id
    )
WHERE
    u.status = 1
    AND u.birthdate <= DATEADD(YEAR, -18, GETDATE())
    AND c.status = 1
ORDER BY
    c.name;


--Explicacion de consulta 


-- Tomé la decisión de diseñar esta consulta SQL de la siguiente manera:
-- La consulta proporciona una solución eficiente y precisa para obtener la información requerida.
-- Selecciona columnas claras y utiliza alias significativos para mejorar la legibilidad del resultado.
-- Utiliza una unión con EXISTS en una subconsulta para verificar la existencia de una relación entre el usuario y el cliente.
-- Aplica un filtrado adecuado de datos para seleccionar usuarios activos con más de 18 años y clientes activos.
-- Ordena los resultados alfabéticamente por el nombre del cliente.

/*SELECT
u.name AS user_name,
u.birthdate,
c.name AS customer_name
FROM
[user] u
JOIN
customer c ON EXISTS (
SELECT 1
FROM user_customer uc
WHERE uc.user_id = u.id
AND uc.customer_id = c.id
)
WHERE
u.status = 1
AND u.birthdate <= DATEADD(YEAR, -18, GETDATE())
AND c.status = 1
ORDER BY
c.name;
*/