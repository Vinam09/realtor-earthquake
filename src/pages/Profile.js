import React from 'react';
import earthQuakeData from '../data/earthquakes.json';

const Profile = () => {
  const profile = earthQuakeData.profile;
  const profileMap = [];

  const fieldValues = [
    { label: 'First Name', value: 'firstName' },
    { label: 'Last Name', value: 'lastName' },
    { label: 'Phone', value: 'phone' },
    { label: 'Email', value: 'email' },
    { label: 'Bio', value: 'bio' },
  ];

  fieldValues.map((field) => {
    profileMap.push(
      <div className="row" key={field.value}>
        <div className="field title">{field.label}</div>
        <div className="field value">{profile[field.value]}</div>
      </div>
    );
  });

  return (
    <div className="container">
      <h1>Profile</h1>
      <div className="row">
        <div className="column">
          <img className="avatar" src={profile.avatarImage} />
        </div>
        <div className="column2">{profileMap}</div>
      </div>
    </div>
  );
};

export default Profile;
