import { combineReducers } from 'redux';
import distributor from './distributor';
import movieData from './reducer';

const allReducer = combineReducers(
    {
        movieData,
        distributor
    }
);

export default allReducer;