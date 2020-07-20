import React, { useEffect, FunctionComponent } from "react";
import { BrastlewarkCitizen, fetchAllCitizens, getCitizens } from "../store/ducks/";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Searcher } from "./Searcher";
import { List, ListRowRenderer, AutoSizer, CellMeasurer, CellMeasurerCache } from "react-virtualized";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../styles/components/CitizenList.scss'

export const Citizen: FunctionComponent<{ index: number }> = ({ index }) => {
  const citizens = useSelector(getCitizens);
  const citizen = citizens[index];

  return (
      <div className="card" key={citizen.id} >
        <div className="title">
          <h2>
            <Link to={`${citizen.id}`}>
              {citizen.name}
            </Link>
          </h2>
        </div>
        <div className="image">
          <Link to={`${citizen.id}`}>
            <LazyLoadImage
              alt={citizen.name}
              src={citizen.thumbnail}
              height={200} 
            />
          </Link>
        </div>
      </div>
  );
};

const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 100
});

export const RowRenderer: ListRowRenderer = ({ index, parent, key, style}: any) => {
  return (
    <CellMeasurer 
      key={key}
      cache={cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
      style={style}
    >
      <div style={style}>
        <Citizen index={ index } />
      </div>
    </CellMeasurer>
  );
};

class AutosizerWrapper extends React.Component<{ citizens: BrastlewarkCitizen[] }> {

  render() {
    return (
      <AutoSizer>
      {
        ({ width, height }: any) => {
          return <List
            rowCount={this.props.citizens.length}
            width={width}
            height={height}
            deferredMeasurementCache={cache}
            rowHeight={cache.rowHeight}
            rowRenderer={RowRenderer}
          />
        }
      }
      </AutoSizer>
    )
  }
}

export const CitizenList: FunctionComponent = () => {
  const citizens = useSelector(getCitizens)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCitizens());
  }, [dispatch]);

  console.log(citizens.length)

  return (
    <>
      <Searcher />
      <AutosizerWrapper citizens={citizens} />
    </>
    )
};