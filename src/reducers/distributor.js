const initialState = {
    movieName:'',
    movieList:[],
    editIndex:''
};

function editActiveName(state,index){
    state.editIndex = index;
   for(let i=0;i<state.movieList.length;i++){
        if(index === i)            
            return state.movieName = state.movieList[i];
   }
}

function updateName(state){
    state.movieList[state.editIndex] = state.movieName;
    state.editIndex = '';
    state.movieName = '';
}

function deleteName(state){
    state.movieList.splice(state.editIndex,1);
    state.editIndex = '';
    state.movieName = '';
}

function movieListPush(state){
    if(state.movieName != ''){
        state.movieList.push(state.movieName);
        state.movieName = '';
    }
    return state.movieList;
}

export default  function (state = initialState, action){
    switch(action.type){
        case "ONCHANGE":
            return {...state, movieName:action.payload};
            break;
        case "ADD":
            return {...state, movieList:movieListPush(state)};
            break;
        case "EDIT":
            return{...state, editName:editActiveName(state,action.payload)}
            break;
        case "UPDATE":
            return{...state, updateName:updateName(state)}
            break;
        case "DELETE":
            return{...state, deleteName:deleteName(state)}
            break;
        default:
            return state;
    }
}