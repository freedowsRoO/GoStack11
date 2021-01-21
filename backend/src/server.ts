import express from 'express';
import cors from 'cors';
import routes from './routes/index';

const app = express();

// Faz com que a API esteja visivel na web
app.use(cors());
// Faz o express entender o JSON
app.use(express.json());

// Le o arquivo com as rotas
app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
