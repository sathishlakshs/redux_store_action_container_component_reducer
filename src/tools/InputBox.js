import React, {Component} from 'react';

export default class InputBox extends Component{
    render(){
        return (
            <div>
                <input type='text' value={this.props.value}  onChange={(e)=>this.props.handleChange(e.target.value,'movieName')} />
            </div>
        );
    }
}