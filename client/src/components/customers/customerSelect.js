import React from 'react';
import './customerSelect.css';

export default class CustomerSelect extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          customers : []
      }
  }

  componentDidMount(){
    // do not need to type http://localhost:5000 because of setting up proxy
    fetch('/customer/select').then((response) => {
        response.json().then((data) => {
            this.setState({
                customers : data
            })
        })
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2><br/>
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>FNAME</th>
                      <th>LNAME</th>
                      <th>PNUMBER</th>
                      <th>ADDRESS</th>
                      <th>EMAIL</th>
                      <th>REGISTRATION</th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.customers.map((el) => {
                      return(
                          <tr>
                              <td>{el.ID}</td>
                              <td>{el.FNAME}</td>
                              <td>{el.LNAME}</td>
                              <td>{el.PNUMBER}</td>
                              <td>{el.ADDRESS}</td>
                              <td>{el.EMAIL}</td>
                              <td>{el.REGISTRATION}</td>
                          </tr>
                      )
                  })}
              </tbody>
          </table>
      </div>
    );
  }
}

