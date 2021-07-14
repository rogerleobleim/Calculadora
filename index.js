const express = require ("express") ;
const app = express();
const port = 8000;
app.listen(port, () => console.log(`Servidor Escutando na Porta ${port}`));

app.get ("/hello", helloWord)
app.get ("/calcular", calcular)

function helloWord (req, res) { 
 res.send ("Hello Word")    
}

function calcular (req, res) {
   let nome =  req.query.nome;
   let idade = req.query.idade;
   let ehmaiordeidade = (idade >= 18);

   response .send ("Nome " , nome "Idade", idade )
   
}