import React, { Component } from 'react';
import { connect } from 'react-redux';

class CountryDetail extends Component{
  render(){
    if(!this.props.country){
      return <div>Select a country to get started.</div>;
    }

    return (
      <div>
        <h3> Details for: </h3>
        <div> Code: {this.props.country.code} </div>
        <div> Name: {this.props.country.name} </div>
        <div> Population: {this.props.country.population} </div>
        <div> Description: {this.props.country.description} </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    country: state.activeCountry
  }
}

export default connect (mapStateToProps)(CountryDetail);
