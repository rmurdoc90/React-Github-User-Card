import React from 'react';

class Card extends React.Component {

    render(){
        return(
            <div className='section'>
                <div className='card'>
                    <h2>Name: {this.props.data.user.name}</h2>
                    <img src={this.props.data.user.avatar_url}/>
                    <h3>Github: {this.props.data.user.html_url}</h3>
                </div>

                {this.props.data.followers.map(followers => (
                    
                    <div key = {followers.id} className ='card'>
                         <h3>Name: {followers.login}</h3>
                        <img src={followers.avatar_url}/>
                        <div>
                           <h4>Github: {followers.html_url}</h4> 
                        </div>

                    </div> 
                    
                ))}

           </div>
        )
    }
}

export default Card;