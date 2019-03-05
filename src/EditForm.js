import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', flavor: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount()
  {

        fetch( "http://180.179.103.250/mosin/react/test_mosin.php" )
            .then( function ( response )
            {
                return response.json();
            } )
            .then( data =>
            {
                //console.log(data);
                this.setState( { name: data.name, flavor: data.flavor } );
            } );

  }


  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  
  handleSubmit(event) {
    event.preventDefault();
    //alert('A name was submitted: ' + this.state.name + ' \n ' + this.state.flavor);
    var param = {
      name:this.state.name,
      flavor:this.state.flavor
    };
    $.ajax({
      url: 'http://180.179.103.250/mosin/react/react_form.php',
      type: 'post',
      data: param,
    }).done((data)=>{                       
      //alert(data);
      //window.openAppRoute("/users"); 
      this.props.history.push('/users/');
    });
   
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Pick your favorite flavor:
          <select name="flavor" value={this.state.flavor} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default EditForm;
