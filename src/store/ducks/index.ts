import { combineReducers } from "redux";
import { citicensReducer, BrastlewarkCitizen } from "./search";

export * from './search'

export interface StoreState {
  citizens: BrastlewarkCitizen[];
}

export const reducers = combineReducers<StoreState>({
  citizens: citicensReducer,
});