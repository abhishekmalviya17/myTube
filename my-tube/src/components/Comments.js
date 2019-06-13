import React from 'react';
import {connect} from 'react-redux';
import {stateMapper, store} from '../store/store.js'

class CommentsComponent extends React.Component{
    componentDidMount(){
        store.dispatch({
            type : 'fetch_video_comments',
            videoId : this.props.videoId
        })
    }
    
    
    render(){
        return(
            this.props.currentVideoComments.map(function(c) {
               return  (
               <p key={c.id}>
                   <img src={c.snippet.topLevelComment.snippet.authorProfileImageUrl}></img>
                   <strong>{c.snippet.topLevelComment.snippet.authorDisplayName} </strong> says: <br/>
                {c.snippet.topLevelComment.snippet.textOriginal}
                </p>)
            })
        
            
        )
    }
}

let Comments = connect(stateMapper)(CommentsComponent);

export default Comments;