const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {

    res.json({
        mensaje: "Hola me llamo Angel Velasquez",
        puerto: PORT
    });

});


app.listen(PORT, () => {

    console.log(`Servidor ejecutándose en el puerto ${PORT}`);

});