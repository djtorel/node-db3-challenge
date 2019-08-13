# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

``` sql
SELECT p.ProductName, c.CategoryName
FROM [Products] AS P
JOIN [Categories] AS C
ON p.CategoryID = c.CategoryID;
```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
``` sql
SELECT O.OrderID, S.ShipperName
FROM [Orders] AS O
JOIN [Shippers] AS S
ON O.ShipperID = S.ShipperID
WHERE O.OrderDate < '1997-01-09';
```

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
``` sql
SELECT p.ProductName, o.Quantity
FROM [Products] AS P
JOIN [OrderDetails] AS O
ON o.ProductID = p.ProductID
WHERE o.OrderID = 10251;
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
``` sql
SELECT o.OrderID, c.CustomerName, e.LastName
FROM [Orders] AS O
JOIN [Customers] AS C
ON o.CustomerID = c.CustomerID
JOIN [Employees] AS E
ON o.EmployeeID = e.EmployeeID;
```

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
