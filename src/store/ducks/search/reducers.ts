import { ActionTypes, Action, BrastlewarkCiticen } from "./types";

const initialState: BrastlewarkCiticen[] = [];

export const citicensReducer = (state: BrastlewarkCiticen[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FetchAllCiticens:
      return action.payload;

    default:
      return state;
  }
};