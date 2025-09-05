const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('Server is alive'));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));