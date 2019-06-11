import {fetchOneVideo} from '../api/youtube.js';
import {store} from '../store.js'


function currentPlayerVideoReducer(currentPlayerVideo={},action){
    if(currentPlayerVideo={}){
        currentPlayerVideo=null;
    }
    if(action.type==='fetch_video_data'){
        
        fetchOneVideo(store,action);
    }
    if(action.type='video_data_loaded'){
        return action.videoData;
    }
    return currentPlayerVideo;
}

export default currentPlayerVideoReducer;