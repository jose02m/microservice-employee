import pkg from 'pg';
const {Pool} = pkg;

const connection = new Pool({
  host: "localhost",
  user: "postgres",
  passsword: "",
  database: "employee",
  port: 5432,
})

export default connection;