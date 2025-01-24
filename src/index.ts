import express from "express";
import { router } from "./decorators/routes.decorators"; // Importa el router configurado con decoradores

const app = express();

app.use(express.json()); // Middleware para parsear JSON

app.use("/api", router); // Usa el router configurado con decoradores

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






// import express from 'express';
// import { router } from './decorators/routes.decorators';

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/status', (req, res) => {
//   res.json({ message: 'Servidor ejecutándose en el puerto 3000' });
// });

// app.listen(3000, () => {
//   console.log('Servidor ejecutándose en el puerto 3000');
// });


// import { Router } from "express";
// import { UserController } from "../controllers/user.controller";

// export class UserRoutes {
//   public router: Router;
//   private userController: UserController;

//   constructor() {
//     this.router = Router();
//     this.userController = new UserController();
//     this.initializeRoutes();
//   }

//   private initializeRoutes() {
//     this.router.post("/user/create", (req, res) => this.userController.createUser(req, res));
//     this.router.get("/user/list", (req, res) => this.userController.getUsers(req, res));
//     // Otras rutas...
//   }
// }

// const userRoutes = new UserRoutes();
// export default userRoutes.router;