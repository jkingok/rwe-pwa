export interface Model {
    id?: number;
    year: number;
    manufacturer: string;
    name: string;
}

export interface Car {
    id?: number;
    model?: number | Model;
    registration: string;
}

// TODO Update to Zod?