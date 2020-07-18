import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes, FetchAllCiticens } from './types';

const corsProxyUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master';

export const fetchAllCiticens = () => {
  const url = "data.json";
  return async (dispatch: Dispatch) => {
    const res = await axios.get(`${corsProxyUrl}/${url}`);
    dispatch<FetchAllCiticens>({
      type: ActionTypes.FetchAllCiticens,
      payload: res.data.results,
    });
  };
};