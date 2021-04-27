const express = require('express');
const { Proficionais } = require('../models');

const router = express.Router();

router.get('/', async (_req, res) => {
  const proficionais = await Proficionais.findAll();

  res.status(200).json(proficionais);
});

router.get('/CRM', async (req, res) => {
  const { procurado } = req.body;
  const busca = await Proficionais.findOne({
    where: { CRM: procurado },
  });

  res.status(200).json(busca);
});

router.get('/nome', async (req, res) => {
  const { procurado } = req.body;
  const busca = await Proficionais.findOne({
    where: { nome: procurado },
  });

  res.status(200).json(busca);
});

router.get('/telefoneFixo', async (req, res) => {
  const { procurado } = req.body;
  const busca = await Proficionais.findOne({
    where: { telefoneFixo: procurado },
  });

  res.status(200).json(busca);
});

router.get('/telefoneCelular', async (req, res) => {
  const { procurado } = req.body;
  const busca = await Proficionais.findOne({
    where: { telefoneCelular: procurado },
  });

  res.status(200).json(busca);
});

router.get('/CEP', async (req, res) => {
  const { procurado } = req.body;
  const busca = await Proficionais.findOne({
    where: { CEP: procurado },
  });

  res.status(200).json(busca);
});

module.exports = router;
