import { combineReducers } from "redux";
import { citizensReducer, BrastlewarkCitizen, CitizenStore } from "./citizen";

export * from './citizen'

export interface StoreState {
  citizens: CitizenStore;
}

export const reducers = combineReducers<StoreState>({
  citizens: citizensReducer,
});