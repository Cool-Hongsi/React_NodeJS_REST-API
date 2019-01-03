import React from 'react';
import './customerUpdate.css';

export default class CustomerUpdate extends React.Component{
    render(){
        return(
            <div>
                <hr/>
                <h2>{this.props.title}</h2><br/>
                <form action="/customer/update" method="post">
                    <input type="text" name="id" placeholder="ID (want to update)" required/><br/>
                    <input type="text" name="fname" placeholder="First Name" required/>
                    <input type="text" name="lname" placeholder="Last Name" required/>
                    <input type="text" name="pnumber" placeholder="Phone Number" required/>
                    <input type="text" name="address" placeholder="Address" required/>
                    <input type="text" name="email" placeholder="Email" required/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}