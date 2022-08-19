import express from 'express';
import cors from 'cors';
import routes from './src/api/routes.js';

const app = express();

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//rutas
app.use('/api', routes);

export default app;