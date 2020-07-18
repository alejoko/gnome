import { StoreState } from '../';

export const getCitizens = (store: StoreState) => store.citizens;

export const getCitizen = (id: string) => (store: StoreState) => store.citizens.find(citizen => citizen.id === Number(id));