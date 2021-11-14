export interface TUsers {
    id?: number;
    name?: string;
    password?: string;
    email?: string;
    _created?: Date;
}

export interface TChirps {
    id?: number;
    userid?: number;
    content?: string;
    location?: string;
    _created?: Date;
}

export interface TMentions {
    chirpid?: number;
    userid?: number;
}