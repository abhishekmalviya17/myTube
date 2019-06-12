import {fetchOneVideo} from '../api/youtube.js';
import {store} from '../store.js'


function currentPlayerVideoReducer(currentPlayerVideo={},action){
    
    if(action.type==='fetch_video_data'){
        
        fetchOneVideo(store,action);
    }
    if(action.type==='video_data_loaded'){
        return action.videos;
    }
    return currentPlayerVideo;
}

export default currentPlayerVideoReducer;