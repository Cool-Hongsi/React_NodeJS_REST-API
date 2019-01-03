import React from 'react';
import './App.css';
import CustomerSelect from './components/customers/customerSelect';
import CustomerInsert from './components/customers/customerInsert';
import CustomerUpdate from './components/customers/customerUpdate';
import CustomerDelete from './components/customers/customerDelete';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CustomerSelect title="SELECT" />
        <CustomerInsert title="INSERT" />
        <CustomerUpdate title="UPDATE" />
        <CustomerDelete title="DELETE" />
      </div>
    );
  }
}
