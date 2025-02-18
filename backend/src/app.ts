import express, { Express, Router } from 'express';

export class App {
  private readonly app: Express;

  constructor(private port: number) {
    this.port = parseInt(process.env.PORT ?? '3000');
    this.app = express();
    this.app.use(express.json());
  }

  getApplication() {
    return this.app;
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(
        `[server]: Server is running at http://localhost:${this.port}`
      );
    });
  }

  addRoute(routeName: string, router: Router) {
    this.app.use(routeName, router);
  }
}
