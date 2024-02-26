import { Movie } from "./movie";
import { Professional } from "./professional";

export class Respuesta {
    constructor(public error: boolean,
        public codigo: number,
        public mensaje: string,
        public data?: Professional[],
        public peliculas?: Movie[]
        ){}
}
