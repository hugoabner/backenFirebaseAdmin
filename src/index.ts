import express, { Application } from "express";
import { router } from "./decorators/routes.decorators"; // Asegúrate de que esta ruta sea correcta
import "./controllers/user.controller"; // Importa el controlador para que se registre

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/v1',router);

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
