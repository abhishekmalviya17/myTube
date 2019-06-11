import React from 'react';
import {connect} from 'react-redux';
import Videos from './Videos.js'
import { stateMapper } from '../store/store.js'
import {store} from '../store/store.js'

class SearchComponent extends React.Component{
    componentDidMount(){
        store.dispatch({
            type : 'clear_videos'
        })
    
    }

    constructor(props){
        super(props);
        this.state={
            query : ""
        }
        this.inputChanged=this.inputChanged.bind(this);
        this.buttonClicked=this.buttonClicked.bind(this);
        
    }

    inputChanged = (event) => {
            this.setState({query : event.target.value});
    }
    buttonClicked = (event) => {
        this.props.dispatch({
            type : 'fetch_videos',
            videoType : 'search',
            query : this.state.query
        })
    }
    render(){
        return(
            <div>
                <h2>Search videos on MyTube</h2>
                <hr/>
                <div className='form-row'>
                    <div className='col'>
                        <input type='text' onChange={this.inputChanged} className='form-control form-control-lg'/>
                    </div>
                    <button className='btn btn-info btn-lg' onClick={this.buttonClicked}>search</button>
                </div>
                <Videos />
            </div>
        )
    }
}

let Search = connect(stateMapper)(SearchComponent);

export default Search;