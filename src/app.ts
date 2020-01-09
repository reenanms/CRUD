import express from 'express';


class Client{
  public id: number;
  public name: string;
  public age: number;
}

class App{
  private startDataTeste() {
    this.clients.push({id:1, name: "José", age: 20});
    this.clients.push({id:2, name: "Pedro", age: 21});
    this.clients.push({id:3, name: "Ana", age: 30});
  }
  private express : express.Application;
  private clients : Client[];

  public constructor() {
    this. clients = [];
    this.express = express();
    this.middlewares();
    this.routes();
    this.startDataTeste();
  }

  private middlewares() : void {
    this.express.use(express.json());
  }

  private routes() : void{
    this.express.get('/clients', (req, resp) => {
      return resp.json(this.clients);
    });

    this.express.post('/clients', (req, resp) => {
      const { name, age } = req.body;

      if (!name) return resp.status(400).json({ error: "name is required" });
      if (!age) return resp.status(400).json({ error: "age is required" });

      const client: Client = {
        id: this.clients.length+1,
        name: name,
        age:Number(age)
      };
      this.clients.push(client);
      
      return resp.json(client);
    });

    this.express.get('/clients/:id', (req, resp) => {
      const { id } = req.params;
      const client = this.clients.find(p => p.id === Number(id));
      if (!client) return resp.status(400).json({ error: "id is required" });
      return resp.json(client);
    });

    this.express.delete('/clients/:id', (req, resp) => {
       const { id } = req.params;
       const client = this.clients.find(p => p.id === Number(id));
       if (!client) return resp.status(400).json({ error: "id is required" });
       this.clients.splice(this.clients.indexOf(client), 1);
       return resp.json(client);
    })
  }

  public listen(){
    this.express.listen(3000);
  }
}

export default new App();
