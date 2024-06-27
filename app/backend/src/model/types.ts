export interface articleData {
    "date": string,
    "articleContent":{
        [brand:string]: {
            "collection": string,
            "releaseDate": string
        }
    }
}
