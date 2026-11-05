import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '10mb' }));

// Health and offline capability status endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    mode: 'offline',
    platform: 'ConceptMirror AI Offline Educational Platform',
    subjectsCount: 5,
    unitsCount: 25,
    topicsCount: 75,
    mcqCount: 750,
    partBCount: 50,
    externalApiRequired: false,
    timestamp: new Date().toISOString(),
  });
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist'));
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`ConceptMirror AI Offline Platform running on port ${PORT} (0.0.0.0)`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
