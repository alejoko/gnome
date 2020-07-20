import React, { FunctionComponent } from "react";
import { searchCitizen, getCitizenNeedle } from "../store/ducks";
import { useSelector, useDispatch } from "react-redux";
import '../styles/components/Searcher.scss'

export const Searcher: FunctionComponent = () => {
  const needle = useSelector(getCitizenNeedle)
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchCitizen(e.target.value));
  };
  
  return (
    <div className="info-container">
      <h2>Welcome to the Brastlewark Citizens Search App!</h2>
      <div className="inputWrapper">
        <input
          onChange={handleInputChange}
          value={needle}
          type="text"
          id="searchbar"
          placeholder="Search for Citizens of Brastlewark..."
        />
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <br />
    </div>
  );
};