import React from 'react';

class Card extends React.Component {

    render(){
        return(
            <div>
                
                {this.props.hubData.map(hubData => (
                    
                    <div key = {hubData.id} className ='card'>
                        <img src={hubData.avatar_url}/>
                        <div>
                           <h3>{hubData.login}</h3>
                           <h4>Github: {hubData.html_url}</h4> 
                        </div>

                    </div> 
                    
                ))}

           </div>
        )
    }
}

export default Card;