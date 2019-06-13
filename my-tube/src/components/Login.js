import React from 'react';
import {GoogleLogin} from 'react-google-login';
 
class Login extends React.Component{
    constructor(props){
        super(props);
        this.googleCallBack=this.googleCallBack.bind(this);
    }


    googleCallBack(response){
        if(!response || !response.accessToken){
            alert('Sorry! Google sign in has failed please try again');
            return;
        }
        let user={
            name : response.profileObj.name,
            token : response.accessToken
        }
        localStorage.setItem('user' , JSON.stringify(user));

        this.props.history.push('/app');
    }

    render(){
        return(
            <div className='container'> 
               <div className='row'>
                   <div className='col-md-4 offset-md-4'>
                       <h2 className='text-info'>Login using google</h2>
                       <hr />
                       <GoogleLogin
                       clientId='803969087168-b93fb545jg8vj9v8tj7s3pnadf3a1dos.apps.googleusercontent.com'
                       onSuccess={this.googleCallBack}
                       onFailure={this.googleCallBack}
                       buttonText='Login'
                       scope='https://www.googleapis.com/auth/youtube' />
                   </div>
               </div>
            </div>
        )
    }
}

export default Login;