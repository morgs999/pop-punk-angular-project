export interface Band {
    name: string;
    tracks: number;
    active: boolean;
}

export interface Album {
    albumName: string;
    releaseDate: Date;
    rating: number;
    cover?: string;
    recordLabel?: string;
    LP?: boolean;
    EP?: boolean;
}