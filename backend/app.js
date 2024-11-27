const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Rotas
// app.use('/api', exampleRoute);

app.listen(PORT, () => {
    console.log(`Backend rodando em http://localhost:${PORT}`);
});
