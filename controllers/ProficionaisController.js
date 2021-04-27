const express = require('express');
const { Proficionais } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  const { nome, CRM, telefoneFixo, telefoneCelular, CEP, especialidade } = req.body;

  const novoProficional = { nome, CRM, telefoneFixo, telefoneCelular, CEP, especialidade };

  //console.log(novoProficional);

  await Proficionais.create(novoProficional);


  res.status(201).json(novoProficional);
});


router.put('/edit/:id', async (req, res) => {
  const { nome, CRM, telefoneFixo, telefoneCelular, CEP, especialidade } = req.body;

  const pessoa = await Proficionais.findOne({
    where: { id: req.params.id },
  });

  const editedPessoa = { nome, CRM, telefoneFixo, telefoneCelular, CEP, especialidade };

  await Proficionais.update(editedPessoa, { where: { id: req.params.id } });

  res.status(200).json(editedPessoa);
});

router.delete('/delete/:id', async (req, res) => {
  await Proficionais.destroy({ where: { id: req.params.id } });

  res.status(204).end();
});

module.exports = router;
