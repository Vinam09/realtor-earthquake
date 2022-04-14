import React from 'react';
import { Link } from 'react-router-dom';
import earthQuakeData from '../data/earthquakes.json';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to={`/`}>
          <img
            src={earthQuakeData.site.logoImage}
            alt={earthQuakeData.site.title}
          />
        </Link>
      </div>
      <div className="title">{earthQuakeData.site.title}</div>
      <div className="profile">
        <Link to={'/profile'}>Welcome {earthQuakeData.profile.firstName}</Link>
      </div>
    </header>
  );
};

export default Header;
