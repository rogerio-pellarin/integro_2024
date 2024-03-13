SELECT 
    U.name AS nombre_usuario,
    U.birthdate AS fecha_nacimiento_usuario,
    C.name AS nombre_cliente
FROM 
    User U
JOIN 
    User_customer UC ON U.id = UC.user_id
JOIN 
    Customer C ON UC.customer_id = C.id
WHERE 
    U.status = 1
    AND C.status = 1
    AND DATEDIFF(CURDATE(), U.birthdate) >= 6570  -- 18 años en días (365.25 días/año * 18 años)
ORDER BY 
    C.name;