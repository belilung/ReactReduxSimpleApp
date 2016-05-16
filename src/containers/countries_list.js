import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { countries } from '../reducers/index';
import { fetchCountries } from '../actions/index';
import { selectCountry } from '../actions/selected_country';

class CountriesList extends Component{
  constructor(props){
    super(props);

    this.state = { term: ""};
    //We need to go and fetch countries data
    this.props.fetchCountries();
  }

  renderList() {
    console.log(this.props.countries);
    if(
      typeof this.props.countries == "undefined"
      || this.props.countries == null
      || this.props.countries.length == null
      || this.props.countries.length <= 0
    ){
      return <div> Loading... </div>;
    }

    return this.props.countries[0].items.map ((country, index) => {
      return (
        <li
         key={country.code}
         onClick = {() => this.props.selectCountry(country)}
         className="list-group-item cities-list-item">
         {country.name}
         </li>
      );
    });

  }

  render(){
    return (
      <div className = "list-group col-sm-4">
      <h3> List of countries </h3>
      <ul>
          {this.renderList()}
      </ul>
      </div>
    );
  }

}

//Anything returned from this function will end up as props
//on the CountriesList container
function mapDispatchToProps(dispatch) {
  //Whenever selectCountry is called, the result should be passed
  //to all of our reducers
  return bindActionCreators( { fetchCountries, selectCountry }, dispatch);

}

function mapStateToProps({countries}){
  return { countries }
}
// Promote CountriesList from a component to a container - it needs to know
// about this new dispatch method, selectCountry. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
