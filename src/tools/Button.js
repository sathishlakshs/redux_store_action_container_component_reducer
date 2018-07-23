import React, {Component} from 'react';

export default class Button extends Component{
    render(){
        return (
            <div>
                <input type='button' onClick={()=>this.props.click()} value={this.props.name}/>
            </div>
        );
    }
}