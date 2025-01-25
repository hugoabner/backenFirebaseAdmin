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