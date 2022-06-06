import React, { Component } from 'react';
 import { Card } from 'antd';
 import './Perfil.css';
 import user from '../../assets/user.png';
import { Tabs, Icon } from 'antd';
import {PedidosDisplay} from './PedidosDisplay';
import {MiPerfilDisplay} from './MiPerfilDisplay';

const TabPane = Tabs.TabPane;
   export const PerfilPersonal = ({photoURL, displayName, email, isLogged}) => {   
    return ( 
        <div className="data_perfil"> 
            <div className="muro"> 
                <h2>Mi perfil</h2> 
                <div style={{width:"80%", margin:"0 auto", display:"flex"}}>
                    <div className="photo_profile" > 
                        <img  className="avatar" src={photoURL ? photoURL : user} alt="user"/>
                    </div> 
                    <div className="box_name">
                        <p>{displayName}</p>
                    </div>
                </div>
            </div> 
            <div className="data">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="solution" />Mis pedidos</span>} key="1">
                        <PedidosDisplay />
                    </TabPane>
                    <TabPane tab={<span><Icon type="user" />Mi perfil</span>} key="2">
                        <MiPerfilDisplay />
                    </TabPane>
                </Tabs>
            </div>
        </div> 
    );

     }  