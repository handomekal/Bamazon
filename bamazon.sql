DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (100) NOT NULL,
  dempartment_name VARCHAR (45) NOT NULL,
  price INT NOT NULL AUTO_INCREMENT,
  stock_quantity INT NOT NULL AUTO_INCREMENT,
);

SELECT * FROM bamazon_DB;

