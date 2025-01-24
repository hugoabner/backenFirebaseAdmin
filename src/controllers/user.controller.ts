// import { Controller, Get, Post } from '../decorators/routes.decorators';
// import { TypedRequestBody, User } from './../models/user';
// import { UserService } from './../services/user.service';
// import { Response } from 'express'; 


// @Controller('/users')
// export class UserController {
// 	private readonly userService : UserService;

// 	constructor() {
// 		this.userService = new UserService();
// 	}

// 	@Post('/create')
// 	public async createUser (req: TypedRequestBody<User>, res: Response): Promise<void> {
// 		try {
// 			const data : User = req.body;
// 			const user = await this.userService.createUser(data);
// 			res.status(201).json({ message: 'Usuario creado exitosamente', user });
// 		} catch (error) {
// 			console.log("Error en crear usuario", error);
// 		}
// 	}

// 	@Get("/list")
// 	public async getUsers(req: Request, res: Response): Promise<void> {
// 		try {
// 		const users = await this.userService.getUsers();
// 		res.status(200).json(users);
// 		} catch (error) {
// 		res.status(500).json({ error: (error as Error).message });
// 		}
// 	}
// }



import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { Controller, Post, Get } from "../decorators/routes.decorators";
import { User } from "../models/user";

@Controller("/user")
export class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  @Post("/create")
  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const data: User = req.body;
      const user = await this.userService.createUser(data);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({error});
    }
  }

  @Get("/list")
  public async listAllUsers(req: Request, res: Response): Promise<void> {
    try {
      await this.userService.listAllUsers();
      res.status(200).send("Users listed in console");
    } catch (error) {
      res.status(500).send("Error listing users");
    }
  }
}