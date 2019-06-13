import {fetchPlaylists} from '../api/youtube.js';
import {store} from '../store.js'


function playlistsReducer(playlists=[],action){
    
    if(action.type==='fetch_playlists'){
        fetchPlaylists(store,action);
    }
    if(action.type==='playlists_loaded'){
       playlists=action.playlists;
       return action.playlists
    }
    return playlists;
}

export default playlistsReducer;