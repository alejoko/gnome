import React, { useEffect, FunctionComponent } from "react";
import { BrastlewarkCitizen, fetchAllCitizens, getCitizens } from "../store/ducks/";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

interface ListProps {
  citizens: BrastlewarkCitizen[];
}

export const Citizen: FunctionComponent<{ citizen: BrastlewarkCitizen }> = ({ citizen }) => {
  return (
    <div className="card" key={citizen.id}>
      <div className="title">
        <img alt={citizen.name} src={citizen.name} />

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


  
  return (<div> { citizens.map((citizen: BrastlewarkCitizen) => <Citizen citizen={citizen} />) } </div>);
};

/*class _HeroesList extends React.Component<ListProps> {
  componentDidMount() {
    this.props.fetchAllHeroes();
  }

  addDefaultImgSrc = (e: React.BaseSyntheticEvent) => {
    e.target.src = NotFound;
  };

  renderHeroes(): JSX.Element[] {
    return this.props.heroes.map(
      
    
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.renderHeroes()}

          {/* {this.props.heroes === "character with given name not found" ? (
            <div>Errr</div>
          ) : (
            this.renderHeroes()
          )} }
        </div>
      </div>
    );
  }
}*/

/*const mapStateToProps = (state: StoreState): { heroes: BrastlewarkCitizen[] } => {
  return { heroes: state.citizens };
};*/

/* export const HeroesList = connect(mapStateToProps, { fetchAllCitizens })(
  _HeroesList
); */