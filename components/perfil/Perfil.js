import React from 'react';
import {PerfilPersonal} from './PerfilPersonal.js';
import './Perfil.css';
import {connect} from 'react-redux';



class Perfil extends React.Component {
    state = {
        isLogged:false,
        user: null
    };

    componentWillMount() {
        let user = localStorage.getItem("user");
        // user = JSON.parse(user);
        if (user) {
            // console.log("si")
            this.setState({isLogged:true, user})
        }else{
            this.setState({isLogged:false})
            this.props.history.push("/login");
        }
    }
    componentDidMount () {
        window.scroll(0, 0)
    }

  render() {
    return (
      <div className="perfil">
        <div style={{borderBottom:" 1px solid #f8f8f7", paddingBottom:"50px"}} >
            <PerfilPersonal    isLogged={this.props.isLogged}
                                   {...this.props.user}/>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state, ownProps){
    // console.log(state);
    return {
        user:state.user.userObject,
        isLogged:Object.keys(state.user.userObject).length > 0
    }
}

export default Perfil = connect(mapStateToProps)(Perfil);