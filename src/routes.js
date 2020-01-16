import Router from 'express';
import User from './app/models/Users';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Gustavo Angelo',
    email: 'gustavo.angelo@elogroup.com.br',
    password_hash: '123456789',
  });

  return res.json(user);
});

export default routes;
