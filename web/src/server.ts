import { prisma, PrismaErros } from './utils/prisma-client';
import express from 'express';

import { v4 as uuid } from 'uuid';
import { router } from './routes/api';

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333, () => {
  console.log('http server running');
});
