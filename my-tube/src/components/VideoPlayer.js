import React from 'react';
import {connect} from 'react-redux';
import {store} from '../store/store';
import Comments from './Comments.js';
import {stateMapper} from '../store/store.js';


class VideoPlayerComponent extends React.Component{
   
   constructor(props){
       super(props);
        this.state={
            showMoreClicked : false
        }
       this.showMoreClicked = this.showMoreClicked.bind(this);
       this.showLessClicked = this.showLessClicked.bind(this);
   }

   showMoreClicked = () =>{
       this.setState({
           showMoreClicked : true
       })
   }
   showLessClicked = () =>{
    this.setState({
        showMoreClicked : false
    })
}
   
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

   renderDescription(){
      if(this.state.showMoreClicked){
        return (
            <p>
                {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.description}
                <button onClick={this.showLessClicked} className='btn btn-link'>
                    show less
                </button>
            </p>
        )
      }else{
        return (
            <p>
                {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.shortDescription}
                <button onClick={this.showMoreClicked} className='btn btn-link'>
                    show more
                </button>
            </p>
        )
      }
   }

    render(){
        console.log(this.props.match.params.videoId);
        return(
            <div>
                
                <h2 className='text-danger'>{this.renderTitle()}</h2>
                <hr></hr>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title='player' className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.match.params.videoId}`} allowFullScreen></iframe>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-md-12'>
                        <h2>Views : {this.props.currentPlayerVideo.statistics && 
                        this.props.currentPlayerVideo.statistics.viewCount},
                           Likes : {this.props.currentPlayerVideo.statistics && 
                        this.props.currentPlayerVideo.statistics.likeCount},
                        Dislikes : {this.props.currentPlayerVideo.statistics && 
                        this.props.currentPlayerVideo.statistics.dislikeCount} </h2>
                        <hr />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-8'>
                        {this.renderDescription()}
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-md-8'>
                        <h2>
                       {this.props.currentPlayerVideo.statistics && 
                        this.props.currentPlayerVideo.statistics.commentCount} Comments
                        </h2>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <div className='col-md-8'>
                        <Comments videoId={this.props.match.params.videoId}/>
                    </div>
                </div>
            </div>
        )
    }
}

let VideoPlayer=connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;