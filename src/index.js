const express = require('express');
const app = express();

require('./base_datos');

const ConsultaRouter = require('./router/consulta.routes');

//midlewares
app.use(express.json());

//routes
app.use('/api/consultas', ConsultaRouter);

app.listen(3000, () => {
    console.log('listening on port 3000')
});