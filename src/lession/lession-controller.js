import express from 'express';
const router = express.Router();
import { findLessionById, insertLession } from './lession.js';

const getLession = async function (req, res) {
  const lession = await findLessionById(req.params.id);
  res.json(lession);
};

const createLession = async function (req, res) {
  console.log(req.body);
  const lession = await insertLession(req.body);
  res.json(lession);
};
router.get('/:id', getLession);
router.post('/', createLession);

export default router;
