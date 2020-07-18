import { ActionTypes, Action, BrastlewarkCitizen } from "./types";

const initialState: BrastlewarkCitizen[] = [];

export const citicensReducer = (state: BrastlewarkCitizen[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FetchAllCitizens:
      return action.payload;

    default:
      return state;
  }
};