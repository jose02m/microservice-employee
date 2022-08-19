import { Router } from "express";
import employees from "./employees/index.js";

const app = Router();

app.use("/employee", employees);

export default app;
