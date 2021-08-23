import React, { Component } from 'react';

class Home extends Component {
    gohome(){
        this.props.history.push('/home')
    }
    render() {                      
        return (                     
            <div>
                home               
            </div>
        );
        
    }
}

export default Home;