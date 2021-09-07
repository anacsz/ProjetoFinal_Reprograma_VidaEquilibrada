const app = require("./src/app")

const PORT = process.env.PORT || 3333


app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});


module.exports = app;
