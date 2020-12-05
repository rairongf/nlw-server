import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// ## MÉTODOS HTTP ##
// GET: Buscar
// POST: Criar
// PUT: Atualizar
// DELETE: Deletar

// ## PARAMÊTROS ##
// Corpo (Request Body): Dados para criar ou atualizar um registro
// Route Params: Identificar qual registro será atualizado ou deletado ( /users/:id )
// Query Params: Paginação, filtragem, ordenação, etc ( /users?page=2&sort=name )