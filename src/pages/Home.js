import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import earthQuakeData from '../data/earthquakes.json';

const Home = () => {
  const [sortedField, setSortedField] = useState();
  const [sortAsc, setSortAsc] = useState();
  const [sortedData, setSortedData] = useState(earthQuakeData.data.features);

  const tableData = sortedData.map((earthquake) => {
    return (
      <tr key={earthquake.id}>
        <td data-label="Title" className="primary">
          <Link to={`/detail/${earthquake.id}`}>
            {earthquake.properties.place}
          </Link>
        </td>
        <td data-label="Magnitude">{earthquake.properties.mag}</td>
        <td data-label="Time">
          {new Date(earthquake.properties.time).toUTCString()}
        </td>
      </tr>
    );
  });

  const sortField = (field) => {
    setSortAsc(!sortAsc);

    sortedData.sort((a, b) => {
      if (a.properties[field] < b.properties[field]) {
        return sortAsc ? 1 : -1;
      }
      if (a.properties[field] > b.properties[field]) {
        return sortAsc ? -1 : 1;
      }
      return 0;
    });

    setSortedField(field);
    setSortedData(sortedData);
  };

  if (sortedField === undefined) {
    sortField('time');
  }

  return (
    <div className="main">
      <h1>USGS All Earthquakes, Past Hour</h1>
      <div className="list-container">
        <table className="list-earthquakes">
          <thead>
            <tr>
              <th onClick={() => sortField('place')}>Title</th>
              <th onClick={() => sortField('mag')}>Magnitude</th>
              <th onClick={() => sortField('time')}>Time</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
