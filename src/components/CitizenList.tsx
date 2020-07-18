import React, { useEffect, FunctionComponent } from "react";
import { BrastlewarkCitizen, fetchAllCitizens, getCitizens } from "../store/ducks/";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Citizen: FunctionComponent<{ citizen: BrastlewarkCitizen }> = ({ citizen }) => {
  return (
    <div className="card" key={citizen.id}>
      <div className="title">
        <img alt={citizen.name} src={citizen.thumbnail} />

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

  return (<div> { citizens.map((citizen: BrastlewarkCitizen) => <Citizen key={citizen.id} {... { citizen }} />) } </div>);
};