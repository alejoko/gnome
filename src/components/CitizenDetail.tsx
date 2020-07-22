import React, { FunctionComponent } from "react";
import { getCitizen, getCitizenByName } from "../store/ducks/";
import { useSelector } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import * as NotFound from '../img/NotFound.png';
import '../styles/components/CitizenDetail.scss'

interface CitizenDetailProps extends RouteComponentProps {
    id: string;
}

const CitizenLink: FunctionComponent<{ friend: string }> = ({ friend }) => {
    return (<div><Link to={`/${(useSelector(getCitizenByName(friend)) || {}).id}`}> { friend } </Link></div>)
}

const CitizenDetail = ({ match } : CitizenDetailProps) => {
  
  const { name , thumbnail, age, height, weight, hair_color, professions, friends } = useSelector(getCitizen(match.url.replace('/', ''))) || {};

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
        <div className="citizen-card">
            <div className="title">
                <h1>{name}</h1>
            </div>
            <img
                id="img"
                src={thumbnail ? thumbnail : "Image Not Found"}
                alt={`${name}`}
                onError={addDefaultImgSrc}
            />
            <div className="char">
                <div className="label">Age</div>
                <div className="value">{age}</div>
            </div>
            <div className="char">
                <div className="label">Weight</div>
                <div className="value">{Number(weight).toFixed(2)}</div>
            </div>
            <div className="char">
                <div className="label">Heigth</div>
                <div className="value">{Number(height).toFixed(2)}</div>
            </div>
            <div className="char">
                <div className="label">Hair Color</div>
                <div className="value">{hair_color}</div>
            </div>
            <div className="char">
                <div className="label">Professions</div>
                <div className="value">{(professions || []).join(', ')}</div>
            </div>
            <div className="char">
                { !!(friends || []).length && <div className="label">Friends</div> }
                <div className="value">
                    { (friends || []).map((friend, index) => <CitizenLink key={index} friend = { friend }/> ) }
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default withRouter(CitizenDetail);