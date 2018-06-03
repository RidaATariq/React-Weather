import _ from 'lodash';
import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

const App = () => {
  return (
    <div>
        <SearchBar />
        <WeatherList />
    </div>
    );
}

export default App;