import "reflect-metadata";
import { Router } from "express";

interface RouteDefinition {
  path: string;
  method: "get" | "post" | "delete" | "put" | "patch";
  handlerName: string;
}

export const router = Router();

export function Controller(basePath: string): ClassDecorator {
  return (target: any) => {
    const routes: RouteDefinition[] = Reflect.getMetadata("routes", target) || [];
    const instance = new target();
    routes.forEach((route) => {
      const handler = instance[route.handlerName].bind(instance);
      router[route.method](`${basePath}${route.path}`, handler);
    });
  };
}

export function Get(path: string): MethodDecorator {
  return (target, propertyKey: string | symbol) => {
    const routes: RouteDefinition[] = Reflect.getMetadata("routes", target.constructor) || [];
    routes.push({ path, method: "get", handlerName: propertyKey as string });
    Reflect.defineMetadata("routes", routes, target.constructor);
  };
}

export function Post(path: string): MethodDecorator {
  return (target, propertyKey: string | symbol) => {
    const routes: RouteDefinition[] = Reflect.getMetadata("routes", target.constructor) || [];
    routes.push({ path, method: "post", handlerName: propertyKey as string });
    Reflect.defineMetadata("routes", routes, target.constructor);
  };
}