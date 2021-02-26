import React  from 'react';
import './Avatar.scss';
import 'tachyons';

class Avatarlist extends React.Component{
    render(){
        return(
            <div className="avatarstyle ma4 p4 ">
                <img src ={`https://joeschmoe.io/api/v1/${this.props.name}`}
                 alt="Avatar"/>
                <h2 className="name">{this.props.name}</h2>
                <p>{this.props.work}</p>
            </div>
        )
    }
}

export default Avatarlist;