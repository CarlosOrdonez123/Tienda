import React, { Component } from 'react';
import {LoginDisplay} from './LoginDisplay';
import {RegisterDisplay} from './RegisterDisplay';
import './Login.css';
import firebase from '../../firebase';
//redux
import {connect} from 'react-redux';
import {loginAction} from '../../redux/actions/userAction';


const codigos = {
    "auth/wrong-password":"Tu contraseña es incorrecta",
    "auth/email-already-in-use":"Este usuario ya esta registrado"
};

class Login extends Component {
    state= {
        mostrar:false,
        login:{
            email: null,
            password: null
        },
        error: null,
        registro: false,
        nuevoRegistro: {
            email:null,
            pass:null,
            pass2:null
        }

    };

    // componentWillMount(){
    //     const user = localStorage.getItem("user");
    //     if(user){
    //         this.props.history.push("/perfil");
    //     }
    // };
    componentDidMount () {
        window.scroll(0, 0)
    }

    componentWillMount(){
        firebase.auth().getRedirectResult()
        .then(result=> {
            console.log("lol")
            if(!result.user) return;
            console.log(result.user);
            this.blissTokenAuthWithNodejs(result);
            localStorage.setItem("user",JSON.stringify(result.user));
            //localStorage.setItem("token",JSON.stringify(result.user.credential.accessToken));
            this.props.loginAction(result.user);
            this.props.history.push("/perfil");
        }).catch(function(error) {
            // console.log(error)
        });
    }

    blissTokenAuthWithNodejs = (result) =>{
        //console.log(result.credential.accessToken);
        fetch("http://localhost:3000/auth/facebook", {
            method:"POST",
            headers:{
                "Authorization": "Bearer "+result.credential.accessToken
            }
        })
        .then(r=>{
            if(!r.ok) return console.log(r);
            return r.json()
        })
        .then(res=>{
            console.log("login: ",res)
            localStorage.setItem("token",JSON.stringify(res.token));

            result.user.token = res.token;
            

            fetch("http://localhost:3000/protected", {
                    headers:{
                        "x-auth-token": res.token
                    },
                    method:"get"
                })
            .then(r=>{
                if(!r.ok) console.log("error",r)
                return r.json()
            })
            .then(res=>console.log("orale",res));

        })
        .catch(err=>console.log(err));
    };

    toggleMostrar = () => {
        this.setState({mostrar:!this.state.mostrar});
    };

    saveInput = (e) => {
        const input = e.target.name;
        const value = e.target.value;
        const login = this.state.login;
        login[input] = value;
        this.setState({login});
        // console.log(login);
    };
    saveRegistro = (e) => {
        const input = e.target.name;
        const value = e.target.value;
        const nuevoRegistro = this.state.nuevoRegistro;
        nuevoRegistro[input] = value;
        this.setState({nuevoRegistro});

        // console.log(login);
        if(nuevoRegistro.pass !== nuevoRegistro.pass2)
            this.setState({error:"tu contrasena no coincide"});
        else
            this.setState({error:null});

    };

    onLogin = (e) => {
        e.preventDefault();
        this.blissBasicAuth();
        const {login} = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(login.email, login.password)
            .then(usuario=>{
                let user = JSON.stringify(usuario);
                localStorage.setItem("user", user);
                this.props.loginAction(user);
                this.props.history.push("/perfil");
            })
            .catch(e=>{
                // console.log(e);
                alert(codigos[e.code] );
            });

    };

    blissBasicAuth = () =>{
      const {login} = this.state;
      fetch("http://localhost:3000/auth/basic", {
        method:"post",
        body:JSON.stringify(login),
        headers:{"Content-Type":"application/json"}
      })
      .then(res=>{
        if(!res.ok) return res;
        return res.json();
      })
      .then(r=>{
      //console.log("a vel basic: ",r)
      localStorage.setItem("token", JSON.stringify(r.token));
      this.props.history.push("/admin/products");
      });

    };

    loginGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    };
    loginFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }

    changeRegistro = () => {
        this.setState({registro:true});
    };

    createUser = (e) => {
        e.preventDefault();
        const {nuevoRegistro} = this.state;
        firebase.auth()
            .createUserWithEmailAndPassword(nuevoRegistro.email, nuevoRegistro.pass)
            .then(s=>{
                this.setState({registro:false});
            })
            .catch(e=>
            {
                // console.log(e);
                alert(codigos[e.code] );
            });
    };
    render() {
        const {registro, nuevoRegistro} = this.state;
        return (
            <div>
                {registro ?
                    <RegisterDisplay
                        toggleMostrar = {this.toggleMostrar}
                        mostrar={this.state.mostrar}
                        saveRegistro = {this.saveRegistro}
                        error = {this.state.error}
                        onSubmit = {this.createUser}
                        {...nuevoRegistro}
                    />
                    :
                    <LoginDisplay
                        loginFacebook={this.loginFacebook}
                        loginGoogle={this.loginGoogle}
                        changeRegistro={this.changeRegistro}
                        mostrar={this.state.mostrar}
                        toggleMostrar = {this.toggleMostrar}
                        saveEmail = {this.saveEmail}
                        savePass = {this.savePass}
                        saveInput = {this.saveInput}
                        onSubmit = {this.onLogin}
                        error = {this.state.error}
                    />
                }
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    console.log(state);
    return {
        user:state.user.userObject
    }
}

export default Login = connect(mapStateToProps, {loginAction})(Login);