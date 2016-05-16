import React, { Component } from 'react';
import { connect } from 'react-redux';

class CountryDetail extends Component{
  render(){
    if(!this.props.country){
      return (
        <div className = "col-sm-8">
          <h3>Select a country to get started. </h3>
        </div>
      );
    }

    return (
      <div className = "col-sm-8">
        <h3> Details: </h3>
        <div> Code: {this.props.country.code} </div>
        <div> Name: {this.props.country.name} </div>
        <div> Population: {this.props.country.population} </div>
        <br/>
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
