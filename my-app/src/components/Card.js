import React from 'react';

class Card extends React.Component {

    render(){
        return(
            <div className='section'>
                <div className='card'>
                    <h2>Name: {this.props.myData.login}</h2>
                    <img src={this.props.myData.avatar_url}/>
                    <h3>Github: {this.props.myData.html_url}</h3>
                </div>

                {this.props.hubData.map(hubData => (
                    
                    <div key = {hubData.id} className ='card'>
                        <img src={hubData.avatar_url}/>
                        <div>
                           <h3>Name: {hubData.login}</h3>
                           <h4>Github: {hubData.html_url}</h4> 
                        </div>

                    </div> 
                    
                ))}

           </div>
        )
    }
}

export default Card;