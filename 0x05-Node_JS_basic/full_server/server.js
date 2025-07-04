// full_server/server.js
import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

app.use('/', router);
app.listen(port);

export default app;
