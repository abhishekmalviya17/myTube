import React from 'react';
import{Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Videos from './Videos';
import {store,stateMapper} from '../store/store.js';
import Menu from './Menu.js'
import Search from './Search.js';
import Trending from './Trending.js';
import VideoPlayer from './VideoPlayer';
import Profile from './Profile.js'
import Logout from './Logout.js'
import CreatePlaylist from './CreatePlaylist.js'
class App extends React.Component{
  
    render(){
        return(
            <Provider store={store}>
                
                    
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <Menu />
                            </div>
                            <div className='col-md-9'>
                               <Route path='/app' exact={true} component={Trending} />
                               <Route path='/app/search' component={Search} />
                               <Route path='/app/VideoPlayer/:videoId' component={VideoPlayer} />
                               <Route path='/app/playlists/create' component={CreatePlaylist} />
                                <Route path='/app/profile' component={Profile} />
                                <Route path='/app/logout' component={Logout} />
                            </div>
                        </div>
                    </div>

                
            </Provider>
        )
    }
}

export default App;