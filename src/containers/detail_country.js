import React, { Component } from 'react';
import { connect } from 'react-redux';

class CountryDetail extends Component{
  render(){

    //Ждем, пока пользователь не нажмет на один из элементов
    if( this.props.country.length == 0) {
        return (
          <div className = "col-sm-8">
            <h3>Select a country to get started. </h3>
          </div>
        );
    }

    //если код - 1040, выводим об ошибки стороны сервера. Ошибка 1040, часто возникающая при работе с данным API. 
    if(this.props.country[0].code == 1040){
      return(
        <div className = "col-sm-8">
          <h3>Server side error, try again.</h3>
        </div>
      );
    }

    return (
      <div className = "col-sm-8">
        <h3> Details: </h3>
        <div> Code: {this.props.country[0].code} </div>
        <div> Country: {this.props.country[0].name} </div>
        <div> Population: {this.props.country[0].population} people</div>
        <br/>
        <div> Description: {this.props.country[0].description} </div>
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
