import React from 'react';
import {Link} from 'react-router-dom';
import {stateMapper , store} from '../store/store.js'
import {connect} from 'react-redux';

class MenuCompoment extends React.Component{
   
   componentDidMount(){
       this.props.dispatch({
           type : 'fetch_playlists'
       })
   }
   
   
   
    render(){
        return(
            <div>
                <h2>    
                    MyTube
                </h2>
                <hr/>
                <ul className="list-group">
                    <li className="list-group-item active" >Menu</li>
                    <li className="list-group-item">
                        <Link to='/app'>Trending</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/app/search'>Search</Link>
                    </li>
                    <li className="list-group-item bg-info text-white" >Playlists</li>

                    {this.props.playlists && this.props.playlists.map( p => {
                        return <li key={p.etag} className="list-group-item">
                            <Link to={`app/playlist/${p.id}`}>
                                {p.snippet.title}
                            </Link>
                        </li>
                    })}

                    <li className="list-group-item">
                            <Link to='/app/playlists/create'>
                                <i className='fa fa-plus-circle' style={{size : 100}}></i>
                                Create
                            </Link>
                    </li>
                    <li className="list-group-item bg-info text-white" >My Account</li>
                    <li className="list-group-item">
                        <Link to='/app/profile'>Profile</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/app/logout'>Logout</Link>
                    </li>
                </ul>
            </div>
            
        )
    }
}

let Menu= connect(stateMapper)(MenuCompoment);
export default Menu;