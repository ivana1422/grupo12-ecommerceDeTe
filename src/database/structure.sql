create database tea;

use tea;

/*USUARIOS*/

create table address (
  id int(11) not null auto_increment primary key,
  location varchar(50) not null
);

/*Rol de usuario se identifica con:
 * 0 para usuarios comunes
 * 1 para usuarios admins */

create table users (
  id int not null auto_increment primary key,
  name varchar(50) not null,
  surname varchar(50) not null,
  email varchar(50) not null unique key,
  pass varchar(50) not null,
  avatar varchar(100),
  rol tinyint(4) not null default 0,
  address_id int(11) not null,
  foreign key (address_id) references address(id)
 );

/*PRODUCTOS*/

/*Offer se identificara con:
 * 0 para productos sin descuentos (sin oferta)
 * 1 para productos con descuentos (en oferta)*/
 
create table products (
  id int not null auto_increment primary key,
  name varchar(50) not null,
  price int not null,
  description varchar(200) not null,
  coment varchar(200) not null,
  weight varchar(50),
  offer tinyint(4) default 0,
  stock int not null default 0,
  discount int
);

create table images (
  id int not null auto_increment primary key,
  src varchar(200) not null,
  product_id int not null,
  foreign key(product_id) references products(id)
);

create table ingredients (
  id int not null auto_increment primary key,
  name varchar(50) not null,
  product_id int not null,
  foreign key (product_id) references products(id)  
);

create table categories (
  id int not null auto_increment primary key,
  name varchar(50) not null
);

create table product_category (
  id int not null auto_increment primary key,
  product_id int not null,
  category_id int not null,
  foreign key(product_id) references products(id),
  foreign key(category_id) references categories(id)
);

/*ORDENES DE COMPRA (CARRITO)*/

/*state determina con: 
 * 0 carrito no vendido (stock de productos a�n vigentes)
 * 1 carrito vendido (se resta la cant de productos del carrito del stock total de productos)*/

create table orders (
  id int not null auto_increment primary key,
  user_id int not null,
  state int not null,
  created_at date not null,
  foreign key (user_id) references users(id)
);

create table orders_product (
  id int not null auto_increment primary key,
  order_id int not null,
  product_id int not null,
  cant_products int not null default 0,
  foreign key (order_id) references orders(id),
  foreign key (product_id) references products(id)
);

ALTER DATABASE tea CHARACTER SET utf8 COLLATE utf8_general_ci;

ALTER TABLE tea.images ADD public_id varchar(100) NULL;

ALTER TABLE tea.users ADD avatar_public_id varchar(100) NULL;

DROP TABLE tea.product_category

ALTER TABLE products ADD CONSTRAINT products_FK FOREIGN KEY (category_id) REFERENCES categories(id);