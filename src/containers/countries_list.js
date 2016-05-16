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
    //Вызываем конструктор -> берем данные
    this.props.fetchCountries();
  }

  //Метод вызывающийся в render. Возвращает разметку JSX 
  renderList() {
    if(this.props.countries.length <= 0) {
      return <div> Wait, please... (If you wait a long time, just refresh page)</div>;
    }

    //Если все загружено, замещает каждый элемент массива новым, списковым(li) элементом
    return this.props.countries[0].items.map ((country, index) => {
      return (
        <li
           key={country.code}
           onClick = {() => this.props.selectCountry(country.code)}
           className="list-group-item cities-list-item">
           {country.code},
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
