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
       store.subscribe(function(){
           console.log('naya stote hai ye',store.getState());
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
                    <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.match.params.videoId}`} allowFullScreen></iframe>
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <h2>Views : {this.props.currentPlayerVideo.statistics && 
                        this.props.currentPlayerVideo.statistics.viewCount},
                           Likes : {this.props.currentPlayerVideo.statistics && 
                        this.props.currentPlayerVideo.statistics.likeCount},
                        Dislikes : {this.props.currentPlayerVideo.statistics && 
                        this.props.currentPlayerVideo.statistics.dislikeCount} </h2>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-8'>
                        {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.description}
                    </div>
                </div>
            </div>
        )
    }
}

let VideoPlayer=connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;