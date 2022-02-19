import React from 'react';
import './homepage.component.scss';
import Directory from '../../components/directory/directory.component';



const HomePage = (props) => {
  console.log(props);

  return (
    <div className="homepage">
      <Directory />
    </div>

  );

};




export default HomePage;
