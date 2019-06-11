import React from 'react';
import{connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {stateMapper} from '../store/store.js';
import VideoPlayer from './VideoPlayer.js'



class VideoComponent extends React.Component{
    

    renderVideos(){
        return this.props.videos.map( v=>{

            let videoId=v.id;

            if(typeof videoId != 'string'){
                videoId=v.id.videoId
            }
            let url=`/VideoPlayer/${videoId}`
            return(
                <div key={v.etag} className='col-md-4'>
                   
                   <Link to={url}>
                        <img className='img-fluid' src={v.snippet.thumbnails.high.url} alt={v.snippet.title}></img>
                   </Link>
                        
                    
                    <p >{v.snippet.title} by <em>{v.snippet.channelTitle}</em></p>
                    <hr/>
                </div>
            )
        })
    }
    render(){
        return(
            <div className='row'>
                {this.renderVideos()}
            </div>
        )
    }

    
}

let Videos= connect(stateMapper)(VideoComponent);

export default Videos;