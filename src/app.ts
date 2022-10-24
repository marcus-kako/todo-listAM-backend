import express from 'express';
import { router } from "./router";

export default class Application {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(express.json());
  }

  public router() {
    this.server.use(router);
  }
}