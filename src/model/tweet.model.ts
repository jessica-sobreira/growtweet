import { randomUUID } from "crypto";

export class Tweet {
    public id: string;
    constructor(
        public conteudo: string,
        public tipo: string,
    ) {
        this.id = randomUUID(); 
    }
 }

 

