import express from 'express';


class Client{
  public name: string;
  public age: number;
}

class App{
  private express : express.Application;
  private clients : Client[];

  public constructor() {
    this. clients = [];
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() : void {
    this.express.use(express.json());
  }

  private routes() : void{
    this.express.get('/clients', (req, resp) => {
      return resp.status(400).json(this.clients);
    });
  }

  public listen(){
    this.express.listen(3000);
  }
}

export default new App();
