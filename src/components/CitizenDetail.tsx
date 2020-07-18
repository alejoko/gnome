import React, { useEffect, FunctionComponent, useState } from "react";
import { BrastlewarkCitizen, fetchAllCitizens, getCitizens, getCitizen } from "../store/ducks/";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import * as NotFound from '../img/NotFound.png';

interface CitizenDetailProps extends RouteComponentProps {
    id: string;
}

const CitizenDetail = ({ match } : CitizenDetailProps) => {

  console.log('CitizenDetailProps', match);
  
  const { id, name , thumbnail } = useSelector(getCitizen(match.url.replace('/', ''))) || {};

  const addDefaultImgSrc = (e: React.BaseSyntheticEvent): void => {
    e.target.src = NotFound;
  };

  return (
    <div>
        <div id="button-container">
        <Link to="/">
            <button id="back-button">Go Back</button>
        </Link>
        </div>
        <div className="hero-card">
            <div className="title">
                <h1>{name}</h1>
            </div>
            <img
                id="hero-img"
                src={thumbnail ? thumbnail : "Image Not Found"}
                alt={`${name}`}
                onError={addDefaultImgSrc}
            />
        </div>
    </div>
  );
};

export default withRouter(CitizenDetail);