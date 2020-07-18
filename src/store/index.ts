import { combineReducers } from "redux";
import { citicensReducer, BrastlewarkCiticen } from "./ducks/search";

export interface StoreState {
  citicens: BrastlewarkCiticen[];
}

export const reducers = combineReducers<StoreState>({
  citicens: citicensReducer,
});