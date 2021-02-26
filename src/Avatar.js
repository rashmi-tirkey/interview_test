import React  from 'react';
import './Avatar.scss';
import 'tachyons';
import Avatarlist from './Avatalist';

class Avatar extends React.Component{

    constructor(){
        super();
        this.state = {
            name:"Welcome to Avatar worlds"
        }

    }
    namechange(){
        this.setState(
            {
                name:"Welcome to Avatar Rashmi" 
            }
        )
    }
    render(){

        const avatarlistarr = [

            {
                id:1,
                name:"Vikash Gupta",
                work:"Software Developer"

            },

            {
                id:2,
                name:"Rashmi Gupta",
                work:"Software Developer"

            },

            {
                id:3,
                name:"Shobha ",
                work:"Tester Engineer"

            },

            {
                id:4,
                name:"Neha",
                work:"Software Engineer"

            }
        ]
      const arrayavatarcard = avatarlistarr.map( (avatarcard,i) =>{
            
            return <Avatarlist key ={i} id={avatarlistarr[i].name}    
                               name={avatarlistarr[i].name} 
                               work={avatarlistarr[i].work} />
          } )
        return(
            <div className="avatar-wrapper">
                <h1>{this.state.name}</h1>
                    {arrayavatarcard}
                <button onClick = { () => this.namechange()} > Subscribe </button>
            </div>
        )
    }
}

export default Avatar;