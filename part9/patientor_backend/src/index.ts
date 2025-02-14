import express from 'express';
import diagnoseRouter from './routes/diagnoses'
import PatientRouter from './routes/patients'

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diagnoses', diagnoseRouter);
app.use('/api/patients', PatientRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});