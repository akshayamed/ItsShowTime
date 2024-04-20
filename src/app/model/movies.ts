export class Movies {
    movieId?: number | undefined;
    movieName: string | null | undefined;
    city: string | null | undefined;
    language: string | null | undefined;
    genre: string | null | undefined;
    duration: number | undefined;
    releaseDate: string | null | undefined;
    price: number | undefined;
    posterUrl: string | null | undefined;
    director: string | null | undefined;
    directorUrl: string | null | undefined;
    description: string | null | undefined;

    constructor(movieName: string | null | undefined, city: string | null | undefined, language: string | null | undefined,genre: string | null | undefined,duration: number | undefined,releaseDate: string | null | undefined,price: number | undefined,posterUrl: string | null | undefined, director: string | null | undefined,directorUrl: string | null | undefined,description: string | null | undefined) {


        this.movieName = movieName;
        this.city = city;
        this.language = language;
        this.genre = genre;
        this.duration = duration;
        this.releaseDate = releaseDate;
        this.price = price;
        this.posterUrl = posterUrl;
        this.director = director;
        this.directorUrl = directorUrl;
        this.description = description;
    }
}
// export class Movie {
//     movieId?: number | undefined;
//     movieName: string | null | undefined;
//     city: string | null | undefined;
//     language: string | null | undefined;
//     genre: string | null | undefined;
//     duration: number | undefined;
//     releaseDate: string | null | undefined;
//     price: number | undefined;
//     posterUrl: string | null | undefined;
//     director: string | null | undefined;
//     directorUrl: string | null | undefined;
//     description: string | null | undefined;

//     constructor(movieName: string | null | undefined, city: string | null | undefined, 
//         language: string | null | undefined,genre: string | null | undefined,
//         duration: number | undefined,releaseDate: string | null | undefined,
//         price: number | undefined,posterUrl: string | null | undefined,
//         director: string | null | undefined,directorUrl: string | null | undefined,
//         description: string | null | undefined) {
//         this.movieName = movieName;
//         this.city = city;
//         this.language = language;
//         this.genre = genre;
//         this.duration = duration;
//         this.releaseDate = releaseDate;
//         this.price = price;
//         this.posterUrl = posterUrl;
//         this.director = director;
//         this.directorUrl = directorUrl;
//         this.description = description;
//     }
// }
