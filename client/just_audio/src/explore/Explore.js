import React from 'react';
import Sidebar from './sidebar';
import Feed from './Feed';
import '../static/css/explore.css';
function Explore() {
    return (
      <div className="app">
        <div className="app_body">
          <Sidebar/>
          <Feed/>
        </div>
      </div>
    );
  }

export default Explore