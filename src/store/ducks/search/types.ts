
export interface FetchAllCiticens {
    type: ActionTypes.FetchAllCiticens;
    payload: BrastlewarkCiticen[];
}

export enum ActionTypes {
    FetchAllCiticens,
};

export type Action =
| FetchAllCiticens;

export interface BrastlewarkCiticen {
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