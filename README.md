<h6>{Reprograma} - Turma Online 12 - Back-end | 2021 |  🚀</h6>

<h6>Aluna:  Ana Cláudia Almeida de Souza</h6>

<p  align = "center">
<img src = "vidaequilibrada.JPG" width="350">
</p>


<p>Diabetes Mellitus é um doença que tem como caracteristica a elevação da glicose no sangue (hiperglicemia), isso ocorre devido a defeitos na secreção ou ação do hormonio isulina, produzido pelo pancreas. Quando ocorre a falta da insulina, ocorre o acumulo de glicose no sangue , hiperglicemia.
Hoje diversos fatores contribuem para o surgimento da doença, como má alimentação, falta de atividades fisicas, obsidade.<br>
<ul>
<li>Diabetes Tipo 1: é o tipo menos comum e surge desde o nascimento, sendo considerada uma doença autoimune, já que o próprio sistema imune ataca as células do pâncreas responsáveis por produzir a insulina. Assim, a insulina não é produzida, a glicose não é transportada para as células e acaba se acumulando no sangue.

<li>Diabetes Tipo 2:é o tipo mais comum e acontece devido a uma resistência à insulina que surge ao longo da vida, normalmente devido a maus hábitos alimentares. Essa resistência diminui a ação da insulina no corpo e faz com que a glicose acabe se acumulando no corpo.

<li>Diabetes Gestacional:é um tipo de diabetes que acontece apenas durante a gestação e que está relacionado com a produção, pela placenta, de outros hormônios que bloqueiam a ação da insulina;

<li> Pré-diabtes: acontece quando o nível de açúcar no sangue está aumentado mas ainda não é o suficiente para fazer o diagnóstico de diabetes.
</ul><br>

<b>Alguns sintomas classicos da Diabetes são:</b>
<ul>
<li>Sensação de sede exagerada;
<li>Vontade frequente para urinar;
<li>Cansaço fácil;
<li>Aumento da fome;
</ul> <br></p>

***Fonte: https://www.tuasaude.com/diabetes/ <br>

<h4>Projeto</h4><br>

O projeto desenvolvido tem como intuito auxiiar as pessoas que possuem Diabetes Mellitus - Tipo 1, e precisam realizar o controle da alimentação diariamente , administrando a quantidade dos niveis de açucar no sangue, consequentemente administrando um dose menor de insulina.
Hoje as informações para algun ainda não ocorrem de forma clara, e muitas pessoas acreditam ainda que somente alimentos que contem açucar causa esse descontrole, porem todo alimento que possuir carboidrato assim que ingerido vira açucar no sangue.
Para esse projeto seria apenas uma consulta simples sem a necessidade de realizar cadastro.

<h4>1.Tecnologias</h4>
<table border="1">
<tr>
<td>Ferramenta</td> 
<td>Descrição</td>
</tr>
<tr>
        <td>JavaScript</td>
        <td>Linguagem de Programação</td>
</tr>
<tr>
        <td>NodeJS</td>
        <td>Ambiente de execução do javascript</td>
</tr>
<tr>
        <td>npm</td>
        <td>Gerenciador de pacotes</td>
</tr>
<tr>
        <td>Robo 3T</td>
        <td>Software gratuito multiplataforma para gerenciamento de banco de dados MongoDB</td>
</tr>
<tr>
        <td>Insomnia</td>
        <td>Interface gráfica para realizar os testes</td>
</tr>
</table>

<h4>2.Arquitetura MVC</h4>

 📁 REPROGRAMA-VIDAEQUILIBRADA 
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 foodController.js
   |
   |    |- 📁 models
   |         |- 📄 foodSchema.js
   |
   |    |- 📁 routes
   |         |- 📄 alimentoRoutes.js
   |         |- 📄 index.js
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 Procfile
   |- 📄 package
   |- 📄 server.js

<h4>3.Rotas</h4>

table border="1">
<tr>
<td>Rota</td> 
<td>Método</td>
<td>Função</td>

</tr>
<tr>
        <td>'/ '</td>
        <td>GET</td>
        <td>Lista todo os alimentos</td>
</tr>
<tr>
        <td>'/cadastrar'</td>
        <td>POST</td>
        <td>Cadastra novos alimentos</td>
</tr>
<tr>
        <td>'/:id'</td>
        <td>GET</td>
        <td>Traz o alimento pelo ID</td>
</tr>
<tr>
        <td>PATCH </td>
        <td></td>
</tr>
<tr>
        <td>DELETE/td>
        <td></td>
</tr>
</table>

<h4>4.Schemas</h4>

 foodSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    alimento:{type: String, required: true,},
    tipo:{type: String,required: true,},
    carboidrato:{type: Number,required: true,},
    quantidade:{type: Number,required: true,},
    medida:{type: String,required: true}
});

<h4>5.Regras</h4>

<ul>
<li>Alimento deverá ser cadastrado apenas uma vez</li>
<li>Não é necessário efetuar login para pesquisas </li>
<li>Os alimentos podem ser consultados quantas vezes for necessário</li>
</ul>

<h4>6.Melhorias</h4>

<ul>
<li>Gerar relatórios gráficos para utilização em consutas médicas com os alimentos mais consumidos</li>
<li>Alimentos apresentados por icones grandes para que seja mais facil para quem não sabe ler ou tem baixa visão </li>
<li>Fazer cadastro e criar um diario de alimentação a ser usado por Nutricionistas e Endocrinolistas para controle alimentar restrito.</li>
</ul>