import React, { Component } from 'react';
import axios from 'axios'

class index extends Component {
    componentDidMount(){
        axios({
            url:'http://localhost:3000/playlist/highquality/tags'
        }).then(res=>{
            const hotSong = res.data.tags
            // console.log(hotSong.slice(2,4))          
            const hotlist =  hotSong.splice(0,10)
            console.log(hotlist)          
            // const hostlist = []           
            // for(let i =0;i<10;i++){
            //     hotSong.forEach(item => {
            //         hostlist.push(item)                       
            //     });
            //     // return hostlist
            // }
            // console.log(hostlist);
            
        })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default index;