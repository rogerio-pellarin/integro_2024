SELECT u.Name AS UserName, u.Birthdate, c.Name AS CustomerName
FROM user u
JOIN user_customer uc ON u.ID = uc.User_id
JOIN customer c ON uc.Customer_id = c.ID
WHERE u.Status = 1 
  AND c.Status = 1
  AND TIMESTAMPDIFF(YEAR, u.Birthdate, CURDATE()) > 18
ORDER BY c.Name;
