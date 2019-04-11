import express from 'express';
import {knex} from '../common';
import {updateDB} from '../utils';

const router = express.Router();

router.get('/', async (req, res) => {
  await updateDB();
  res.send(`Hello world from express! Knex is ${knex}`);
});

module.exports = router;
