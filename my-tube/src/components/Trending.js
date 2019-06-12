import React from 'react';
import Videos from './Videos.js'
import {connect} from 'react-redux'
import {store} from '../store/store.js'
import {stateMapper} from '../store/store.js'


class TrendingComponent extends React.Component{
    componentDidMount(){    
        store.dispatch({
            type : 'fetch_videos',
            videoType : 'trending'
        });
    }
    componentWillMount(){
        store.dispatch({
            type : 'clear_videos',
        })
    }
    render(){
        return(
            <div>
                <h2>Trending Videos</h2>
                <Videos />
            </div>
        )
    }

}
 let Trending=connect(stateMapper)(TrendingComponent);

export default Trending;