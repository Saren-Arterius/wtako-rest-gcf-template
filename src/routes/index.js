import express from 'express';
import {knex} from '../common';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Hello world from express! Knex is ${knex}`);
});

module.exports = router;
