import React from 'react';
import { useParams } from 'react-router-dom';
import earthQuakeData from '../data/earthquakes.json';

const Details = () => {
  const { id } = useParams();
  const detailsMap = [];
  const details = earthQuakeData.data.features.find(
    (earthquake) => earthquake.id === id
  );
  const fieldValues = [
    { label: 'Title', value: 'title' },
    { label: 'Magnititude', value: 'mag' },
    { label: 'Time', value: 'time' },
    { label: 'Status', value: 'status' },
    { label: 'Tsunami', value: 'tsunami' },
    { label: 'Type', value: 'type' },
  ];

  fieldValues.map((field) => {
    // Check if field value is time
    if (field.value === 'time') {
      details.properties[field.value] = new Date(
        details.properties[field.value]
      ).toUTCString();
    }

    detailsMap.push(
      <div className="row" key={field.value}>
        <div className="field title">{field.label}</div>
        <div className="field value">{details.properties[field.value]}</div>
      </div>
    );
  });

  return (
    <div className="detail container">
      <h1>{details.properties.place}</h1>
      <section className="map">{detailsMap}</section>
    </div>
  );
};

export default Details;
