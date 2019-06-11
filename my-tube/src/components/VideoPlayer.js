import React from 'react';
import {connect} from 'react-redux';
import {store} from '../store/store';
import {stateMapper} from '../store/store.js';


class VideoPlayerComponent extends React.Component{
   componentDidMount(){
       this.props.dispatch({
           type : 'fetch_video_data',
           videoId : this.props.match.params.videoId
       })
   }

   renderTitle(){
       if( !this.props.currentPlayerVideo.snippet){
            return 'Loading...'
       }
       else{
           return this.props.currentPlayerVideo.snippet.title;
       }
   }
    render(){
        console.log(this.props.match.params.videoId);
        return(
            <div>
                
                <h2 className='text-danger'>{this.renderTitle()}</h2>
                <hr></hr>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/watch?v=${this.props.match.params.videoId}?rel=0`} allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}

let VideoPlayer=connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;