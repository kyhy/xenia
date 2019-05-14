import React from 'react';
import KrishnaPic from './krishna2.jpg';
import './Krish.css';

const Krish = () => (
  <div className="title">
    <h1> Krishna </h1>
    <KrishnaImage />
    <Description />
  </div>
);

function KrishnaImage() {
  return (
    <div className="Krish-img">
      <img src={KrishnaPic} alt="Krishna" />
    </div>
  );
}

function Description() {
  return (
    <div className="description">
      <p>
        Hello my name is Krishna. I am Java developer with a passion for cloud
        computing and learning React.js lately. I love to code watching movies
        and play video games.
      </p>
    </div>
  );
}

export default Krish;
