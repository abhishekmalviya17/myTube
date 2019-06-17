import {createStore , combineReducers} from 'redux';
import videoReducer from './reducers/videoReducer.js';
import currentPlayerVideoReducer from './reducers/currentPlayerVideoReducer.js';
import currentVideoCommentsReducer from './reducers/currentVideoCommentsReducer.js';
import playlistsReducer from './reducers/playlistsReducer.js';
import newPlaylistReducer from './reducers/newPlaylistReducer';
let reducer=combineReducers({
    videos : videoReducer,
    currentPlayerVideo : currentPlayerVideoReducer,
    currentVideoComments : currentVideoCommentsReducer,
    playlists     :  playlistsReducer,
    newPlaylist   : newPlaylistReducer

})


let store=createStore(reducer);

store.subscribe(function(){
    console.log('store dispatch ==>',store.getState());
})

function stateMapper(state){
 return state;
}

export {store , stateMapper};