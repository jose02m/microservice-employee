import * as employeeOps from "../../models/employee/employee.ops.js";

export async function createEmployee(req, res, next) {
  try {
    const employeeData = { ...req.body };
    const result = await employeeOps.insert(employeeData);
    res.json(result);
  } catch (error) {
    return next({ error });
  }
}
export async function readEmployees(req, res, next) {
  try {
    const result = await employeeOps.read();
    res.json(result);
  } catch (error) {
    return next({ error });
  }
}
export async function readOneEmployee(req, res, next) {
  try {
    const codigo = { ...req.params };
    const result = await employeeOps.readById(codigo);
    res.json(result);
  } catch (error) {
    return next({ error });
  }
}
export async function updateEmployee(req, res, next) {
  try {
    const { codigo } = req.params;
    const employeeData = { ...req.body };
    const result = await employeeOps.update(codigo, employeeData);
    res.json(result);
  } catch (error) {
    return next({ error });
  }
}
export async function deleteEmployee(req, res, next) {
  try {
    const { codigo } = req.params;
    const result = await employeeOps.deleteEmployee(codigo);
    res.json(result);
  } catch (error) {
    return next({ error });
  }
}
