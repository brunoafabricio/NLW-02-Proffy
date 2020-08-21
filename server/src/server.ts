import express, { request, response } from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(3333);

//SELECT * FROM users
// knex('users).select('*')

// app.get('/users', (request, response) => {
//     const users = [
//         {name: 'Diego', age: 25 },
//         {name: 'Vini', age: 20 }
//     ]
    
//     return response.json(users);
// });

//Corpo (Request Body) : Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação



// app.post('/users', (request, response) => {
//     console.log(request.body);

//     const users = [
//         {name: 'Diego', age: 25 },
//         {name: 'Vini', age: 20 }
//     ]
    
//     return response.json(users);
// });

// app.delete('/users/:id', (request, response) => {
//     console.log(request.params);

//     const users = [
//         {name: 'Diego', age: 25 },
//         {name: 'Vini', age: 20 }
//     ]
    
//     return response.json(users);
// });


// app.get('/users', (request, response) => {
//     console.log(request.query);

//     const users = [
//         {name: 'Diego', age: 25 },
//         {name: 'Vini', age: 20 }
//     ]
    
//     return response.json(users);
// });
//localhost:3333

