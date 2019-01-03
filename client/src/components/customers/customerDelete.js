import React from 'react';
import './customerDelete.css';

export default class CustomerDelete extends React.Component{
    render(){
        return(
            <div>
                <hr/>
                <h2>{this.props.title}</h2><br/>
                <form action="/customer/delete" method="post">
                    <input type="text" name="id" placeholder="ID (want to delete)" required/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}