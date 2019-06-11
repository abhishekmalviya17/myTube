import {fetchVideos} from '../api/youtube.js';
import {store} from '../store.js'



function videoReducer( videos=[], action){
        if(action.type==='clear_videos'){
            return [];
        }
        if(action.type==='fetch_videos'){
            fetchVideos(store , action);
        }
        if(action.type==='videos_loaded'){
            videos=action.videos;
        }
        return videos;
      
}

export default videoReducer;