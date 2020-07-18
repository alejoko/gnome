import React, { useEffect, FunctionComponent, Fragment } from "react";
import { BrastlewarkCitizen, fetchAllCitizens, getCitizens } from "../store/ducks/";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Searcher } from "./Searcher";

export const Citizen: FunctionComponent<{ citizen: BrastlewarkCitizen }> = ({ citizen }) => {
  return (
      <div className="card" key={citizen.id}>
        <div className="title">
        <Link to={`${citizen.id}`}>
          <img alt={citizen.name} src={citizen.thumbnail} />
        </Link>
          <h2>
            <Link to={`${citizen.id}`}>
              {citizen.name}
            </Link>
          </h2>
        </div>
      </div>
  );
};

export const CitizenList: FunctionComponent = () => {
  const citizens = useSelector(getCitizens)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCitizens());
  }, []);

  return (
    <Fragment>
      <Searcher />
      <div className="container">
        <div> 
          { citizens.map((citizen: BrastlewarkCitizen) => <Citizen key={citizen.id} {... { citizen }} />) } 
        </div>
      </div>
    </Fragment>
    )
};