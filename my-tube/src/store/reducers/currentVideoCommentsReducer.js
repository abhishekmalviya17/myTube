import {fetchVideoComments} from '../api/youtube.js';
import {store} from '../store.js'


function currentVideoCommentsReducer(currentVideoComments=[],action){
    if(action.type==='fetch_video_comments'){
       fetchVideoComments(store,action);
    }
    if(action.type==='video_comments_loaded'){
        return action.comments;
    }
    return currentVideoComments;
}

export default currentVideoCommentsReducer;