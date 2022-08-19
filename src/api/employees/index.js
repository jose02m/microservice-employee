import { Router } from 'express';
import * as employeeController from './controller.js';

const app = Router();

app.post('/create', employeeController.createEmployee);
app.get('/', employeeController.readEmployees)
app.get('/:codigo', employeeController.readOneEmployee)
app.put('/update/:codigo', employeeController.updateEmployee)
app.delete('/delete/:codigo', employeeController.deleteEmployee);

export default app;