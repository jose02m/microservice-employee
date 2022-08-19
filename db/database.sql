CREATE DATABASE employee;

CREATE TABLE employees(
  codigo INTEGER PRIMARY KEY,
  nif VARCHAR(9),
  nombre VARCHAR(100),
  apellido_1 VARCHAR(100),
  apellido_2 VARCHAR(100) ,
  codigo_departamento INTEGER REFERENCES departamento(codigo)
);

CREATE TABLE departamento(
  codigo INTEGER PRIMARY KEY,
  nombre VARCHAR(100) not null,
  presupuesto FLOAT not null
);

alter table employee add foreign key(codigo_departamento) references departamento(codigo)