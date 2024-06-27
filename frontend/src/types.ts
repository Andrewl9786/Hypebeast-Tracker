export interface fashionRelease {
    retailerBrand: string,
    collection: string,
    releaseDate: string
}

export interface Post {
    date: string,
    fashionRelease: fashionRelease[]
}
