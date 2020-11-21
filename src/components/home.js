import React from 'react'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './stylees.css'

class Home extends React.Component{

   responseSuccessGoogle=(response)=>{
             if(response){
                 this.props.history.push('/contact')
                 console.log(response)
             }
        }
    
   responseErrorGoogle=(response)=>{
                console.log(response)
        }
  responseFacebook=(response)=>{
    if(response){
        this.props.history.push('/contact')
    }
 
  }
        render(){
          return(
            <div className="top">
                 <h2>Login Page</h2>
                  <GoogleLogin
                   clientId="733336222715-j4kc3tkiuiioi8h9rqv9pcmttupue8as.apps.googleusercontent.com"
                   buttonText="Login with google"
                   onSuccess={this.responseSuccessGoogle}
                   onFailure={this.responseErrorGoogle}
                   cookiePolicy={'single_host_origin'} />
               <div>
                <FacebookLogin
                appId="397135501411061"
                fields="name,email,picture"
                autoLoad={false}
                callback={this.responseFacebook} />
                 </div>
             </div>
          )
        }
}
export default Home
