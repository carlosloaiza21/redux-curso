import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountries } from '../actions/holidays';
//https://getfestivo.com/v1/countries?api_key=486e9492-b6cb-435c-8f2c-bbe375faab90
class Select extends Component{
  constructor(props){
    super(props);
    this.state = {
      elements:[]
    }
  }
  
  componentDidMount(){
      this.props.getCountries();  
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    if(props.countries){
      return {
        elements: props.countries
      }
    }
    return 0
  }
  

  render(){
    console.log(this.state.elements);
    return(
      <select>
        {
          this.state.elements.map((item)=>{
            return <option key={Math.random()} value={item.code}>{item.name}</option>
          })
        }
      </select>
    )
  }
}

const mapStateToProps = (state) => ({
  countries: state.holidaysReducer.countries[0]
})

const mapDispatchToProps = (dispatch) => ({
  getCountries: () => {
    dispatch(getCountries())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Select);
