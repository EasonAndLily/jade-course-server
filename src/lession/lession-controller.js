import express from 'express';
const router = express.Router();
import { findLessionById } from './lession.js';

const getLession = async function (req, res) {
  const lession = await findLessionById(req.params.id);
  res.json(lession);
};

router.get('/:id', getLession);

export default router;
