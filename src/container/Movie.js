import React,{Component} from 'react';
import InputBox from '../tools/InputBox';
import Button from '../tools/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allAction from '../actions';

class Movie extends Component{
    movieListDisplay(){

       return this.props.movies.movieList.map((name,index) =>{
           return (
               <li key={index} onClick={()=>this.props.Edit(index)}>{name}</li>
           ); 
        });
    }
    render(){
        console.log(this.props.movies.movieList);
        return(
            <div>
                <h2>enter the movie title :</h2>
                <InputBox name='movieName' handleChange={this.props.HandleChange} value={this.props.movies.movieName}/> 
                <br></br>
                {(this.props.movies.editIndex === '')?<Button name='Add' click={this.props.Add}/>:<div><Button name='Update' click={this.props.Update}/><Button name='Delete' click={this.props.Delete}/></div>}
                <h2>Movie List :</h2>
                
                {(this.props.movies.movieList.length > 0)?<ul>{this.movieListDisplay()}</ul>:<h2>add movie name....!</h2>}
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        movies:state.distributor
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        HandleChange:allAction.handleChange,
        Add:allAction.add,
        Edit:allAction.edit,
        Update:allAction.update,
        Delete:allAction.del 
    },dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Movie);