import React from 'react';
import './SampleComponent.css';

interface ContainerProps {
  name: string;
}

const SampleComponent: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">Test Link to Ionic</a></p>
    </div>
  );
};

export default SampleComponent;
