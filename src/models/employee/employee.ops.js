import connection from '../../../db/connection.js';

export async function insert(employeeData){
  const {codigo, nif, nombre, apellido_1, apellido_2, codigo_departamento} = employeeData;
  const result = await connection.query(`INSERT INTO employees (codigo, nif, nombre, apellido_1, apellido_2, codigo_departamento) VALUES (${codigo}, '${nif}', '${nombre}', '${apellido_1}', '${apellido_2}', '${codigo_departamento}')`);
  return result;
}

export async function read(){
  const query = await connection.query("SELECT * FROM employees");
  const result = {...query.rows};
  return result;
}

export async function readById(codeEmployee){
  const query = await connection.query(`SELECT * FROM employees WHERE codigo = '${codeEmployee.codigo}'`);
  const result = {...query.rows};
  return result;
}

export async function update(codeEmployee, employeeData){
  const { nombre, apellido_1, apellido_2, codigo_departamento } = employeeData;
  const result = await connection.query(`UPDATE employees SET nombre = '${nombre}', apellido_1 ='${apellido_1}', apellido_2='${apellido_2}', codigo_departamento = '${codigo_departamento}' WHERE codigo = ${codeEmployee}`);
  return result;
}

export async function deleteEmployee(codeEmployee){
  const result = await connection.query(`DELETE FROM employees WHERE codigo = ${codeEmployee}`);
  return result;
}

