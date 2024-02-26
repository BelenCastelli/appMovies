export class Movie {
    constructor(
        public title?: string,
        public photo?: string,
        public releaseYear?: number,
        public genre?: string,
        public nationality?: string,
        public director?: object[],
        public writer?: object[],
        public actors?: object[],
        public producer?: string,
        public language?: string,
        public platform?: string
    ) {}
}
