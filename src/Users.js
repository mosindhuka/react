import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Users extends React.Component {

  constructor()
  {
      super();
      this.state = {
          rows: [],
          columns: []
      }
      this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    alert('deleted'+id);
    fetch( "http://180.179.103.250/mosin/react/test_react.php" )
            .then( function ( response )
            {
              //console.log("ajax call");
                return response.json();
            } )
            .then( data =>
            {
                this.setState( { rows: data.rows, columns: data.columns } );
            } );
            
  }

  componentDidMount()
  {

        fetch( "http://ickata.net/sag/api/staff/bonuses/" )
            .then( function ( response )
            {
                return response.json();
            } )
            .then( data =>
            {
                this.setState( { rows: data.rows, columns: data.columns } );
            } );

  }

  render() {
    return (
                  <div id="container" className="container">
                <h1>Users List</h1>
                <table className="table">
                    <thead>
                        <tr> {
                            this.state.columns.map(( column, index ) =>
                            {
                                return ( <th>{column}</th> )
                            }
                            )
                        }
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody> {
                        this.state.rows.map(( row ) => (
                            <tr>
                                <td>{row[0]}</td>
                                <td>{row[1]}</td>
                                <td>{row[2]}</td>
                                <td>{row[3]}</td>
                                <td><Link to="/users/edit/1">Edit</Link> | <a href="javascript:void(0)" onClick={this.handleDelete.bind(this,1)}>Delete</a></td>
                            </tr>
                        ) )
                    }
                    </tbody>
                </table>
            </div>

    );
  }
}

export default Users;