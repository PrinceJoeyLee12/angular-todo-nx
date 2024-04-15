/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express, { Request, Response } from 'express';
import cors from 'cors';
import Task from './config/config';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/tasks', async (req: Request, res: Response) => {
  const snapshot = await Task.get();
  const list = snapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }));
  const responseList = list?.reduce(
    (acc, item) => [...acc, { id: item.id, ...item.data }],
    []
  );
  res.send(responseList);
});

app.post('/tasks/create', async (req: Request, res: Response) => {
  let task = req.body;
  await Task.add({ data: task }).then((res) => {
    task = {
      ...task,
      id: task.id,
    };
  });
  res.send(task);
});

app.put('/tasks/update', async (req: Request, res: Response) => {
  const id = req.body.id;
  delete req.body.id;
  const data = req.body;
  await Task.doc(`${id}`)
    .update(data)
    .then((res) => {});
  res.send({ msg: 'Updated' });
});

app.delete('/tasks/delete/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await Task.doc(`${id}`).delete();
  } catch (error) {
    console.log('Error:', JSON.stringify(error));
  }
  res.send({ msg: 'Deleted' });
});

app.listen(4000, () => console.log('Up & Running *4000'));
