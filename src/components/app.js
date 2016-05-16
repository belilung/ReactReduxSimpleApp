import React from 'react';
import { Component } from 'react';
import CountriesList from '../containers/countries_list';
import CountryDetail from '../containers/detail_country';

//Компонент App, возвращает сгененрированные контейнеры
export default class App extends Component {
  render() {
    return (
      <div>
      <CountriesList />
      <CountryDetail />
      </div>
    );
  }
}
