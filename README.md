# Cadastros-Medicos

****************** COMO USAR O PROGRAMA ******************



 -  INSERT  -


Para inserir um dado é necessário colocar no body da requisição os atributos

[nome, CRM, telefoneFixo, telefoneCelular, CEP, especialidade]

Exemplo => 
{
    "nome": "Fernanda Reis Peixoto",
    "CRM": "55.666.77",
    "telefoneFixo": 4256567878,
    "telefoneCelular": 42956567878,
    "CEP": "98765-44",
    "especialidade": ["CADIOLOGIA CLÍNICA", "CIRURIA DE TÓRAX", "CIRURIA DE CABEÇA E PESCOÇO"]
}

A rota da requisição deve ser [http://localhost:3000/cadastro]



 -  UPDATE  -


Para editar um dado é necessário colocar no body da requisição os atributos

[nome, CRM, telefoneFixo, telefoneCelular, CEP, especialidade]

Da mesma forma como no INSERT, porem a rota é outra. 

A rota da requisição deve ser [http://localhost:3000/cadastro/edit/:id]

Sendo o ':id' o id do dado que você quiser editar.

Por exemplo =>

[http://localhost:3000/cadastro/edit/1] 

Essa rota irá editar o dado de id 1.



 -  SOFT DELETE  -


 Para deletar um dado é necessário apenas acessar e executar a rota.

 A rota da requisição deve ser [http://localhost:3000/cadastro/delete/:id]

 Sendo o ':id' o id do dado que você quiser deletar.

 Por exemplo =>

[http://localhost:3000/cadastro/delete/2] 

Essa rota irá deletar os dados do id 2.



 -  SELECT  -


 Para buscar dados é necessário escolher preencher o body da requisição com o dado que queira buscar

 Tendo sempre a chave [procurado] como unica

 Exemplo => 
{
    "procurado": "Fernanda Reis Peixoto",
}

A rota da requisição deve ser [http://localhost:3000/busca/:atributo]

O ':atributo' é um dos atrubutos inserido no banco ou seja:

[nome, CRM, telefoneFixo, telefoneCelular, CEP]

um exemplo de rota possivel seria:

[http://localhost:3000/busca/CRM]

Essa rota aliada com a informação passada pelo body traz o proficional desejado