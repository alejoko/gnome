
export interface FetchAllCitizens {
    type: ActionTypes.FetchAllCitizens;
    payload: BrastlewarkCitizen[];
}

export enum ActionTypes {
    FetchAllCitizens,
};

export type Action =
| FetchAllCitizens;

export interface BrastlewarkCitizen {
    id: number;
    name: string;
    thumbnail: string;
    age: number;
    weight: number;
    height: number;
    hair_color: number;
    professions: string[];
    friends: string[];
}