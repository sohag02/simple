import express, { Request, Response, NextFunction } from "express";

const app = express();
const port = 3000;

// Middleware for logging
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] - ${req.method} ${req.url}`);
  next();
};

// Use middleware
app.use(logger);

// Middleware to parse JSON bodies
app.use(express.json());

// GET route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is the GET route!");
});

// POST route
app.post("/data", (req: Request, res: Response) => {
  const { name, age } = req.body;
  res.json({ message: "Data received!", name, age });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
