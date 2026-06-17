CREATE TABLE users (
CUST_id INT AUTO_INCREMENT PRIMARY KEY,
CUST_name VARCHAR(50) NOT NULL,
phone INT,
address VARCHAR(255)
);


CREATE TABLE pizzas (
pizza_name VARCHAR(100) NOT NULL,PRIMARY KEY
price INT NOT NULL
);

CREATE TABLE orders (
order_id INT AUTO_INCREMENT PRIMARY KEY,
CUST_id INT,
total_price INT NOT NULL,
order_date DATETIME
pizza_menu: valchar(100), not null);