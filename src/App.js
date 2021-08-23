import { Link, Route,Redirect } from 'react-router-dom';
import { Layout,Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { Tabs } from 'antd-mobile';
import Home from './pages/Home';
import HotSong from './pages/HotSong';
import Search from './pages/Search';


const { Header, } = Layout

function App() { 
  const tabs = [
    { title: '推荐音乐', key: 't1',route:'/home' },
    { title: '热歌榜', key: 't2',route:'/hotsong' },
    { title: '搜索', key: 't3',route:'/search' },
  ]; 
  return (   
 <div className="App">
        <Layout>
            <Header style={{ backgroundColor: '#58bc58' }}>                  
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>网</Avatar>
            <span style={{color:'white',marginLeft:"10px"}}>网抑云音乐</span>                       
            <div style={{float:'right'}}>                        
               <Avatar icon={<UserOutlined />} />                        
            </div>
            </Header>
            <Tabs tabs={tabs} onTabClick={(item)=>{console.log(item)}}>
                    
            </Tabs>
                            
        </Layout>

        <Link to="/home"></Link>
        <Link to="/hotsong"></Link>
        <Link to="/search"></Link>

        <Route path="/home" component={Home}></Route>  
        <Route path="/hotsong" component={HotSong}></Route>
        <Route path="/search" component={Search}></Route>
        <Redirect to="/home"></Redirect>
    </div>
  );
}



export default App;
