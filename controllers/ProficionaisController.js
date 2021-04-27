const express = require('express');
const { Proficionais } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  const { nome, CRM, telefoneFixo, telefoneCelular, CEP, especialidade } = req.body;

  const novoProficional = { nome, CRM, telefoneFixo, telefoneCelular, CEP, especialidade };

  console.log(novoProficional);
  await Proficionais.create(novoProficional);


  res.status(201).json(novoProficional);
});

module.exports = router;
