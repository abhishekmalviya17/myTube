import {createPlaylist} from '../api/youtube.js';
import {store} from '../store.js'


function newPlaylistReducer(newPlaylist={},action){
    if(action.type==='clear_playlist_created'){
        return {};
    }
    if(action.type==='create_playlist'){
      createPlaylist(store,action);
       return newPlaylist;
   }
   if(action.type==='playlist_created'){
       return action.newPlaylist;
   }
    return newPlaylist;
}

export default newPlaylistReducer;