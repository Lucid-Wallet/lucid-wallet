import express, { Request, Response, Application, application } from 'express';

const app:Application = express();

const PORT:number = 8080;

app.get('/', (req: Request, res: Response):void => {

  res.send("Server");
});

app.listen(PORT, ():void => {
  console.log(`Listening on PORT ${PORT}`);
})