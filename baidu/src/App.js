import React, { Component } from 'react'
import img_bd from './image/bd_logo1.png'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import './style.css'


class App extends Component {
  render() {
    return (
      <div className='page'>
        <div>
          <Router>
            <div className='nav-bar'>
              <NavLink activeStyle={{fontWeight: 'bold', color: 'black'}} className='nav' to='http://news.baidu.com/'>新闻</NavLink>
              <NavLink activeStyle={{fontWeight: 'bold', color: 'black'}} className='nav' to='https://www.hao123.com/'>hao123</NavLink>
              <NavLink activeStyle={{fontWeight: 'bold', color: 'black'}} className='nav' to='https://map.baidu.com/'>地图</NavLink>
              <NavLink activeStyle={{fontWeight: 'bold', color: 'black'}} className='nav' to='http://v.baidu.com/'>视频</NavLink>
              <NavLink activeStyle={{fontWeight: 'bold', color: 'black'}} className='nav' to='https://tieba.baidu.com/index.html'>贴吧</NavLink>
              <NavLink activeStyle={{fontWeight: 'bold', color: 'black'}} className='nav' to='http://xueshu.baidu.com/'>学术</NavLink>
              <NavLink activeStyle={{fontWeight: 'bold', color: 'black'}} className='nav' to='/account/login'>登录</NavLink>
              <NavLink activeStyle={{fontWeight: 'bold', color: 'black'}} className='nav' to='/set'>设置</NavLink>
              <NavLink activeStyle={{fontWeight: 'bold', color: 'black'}} className='nav' to=''></NavLink>
            </div>
          </Router>
        </div>
        <div className='logo'>
          <img  className='bd' src={img_bd} alt={'百度'}/>
          <br/>
          <form>
            <span className='wr-sc'>
              <input  className='search-content' type='text' />
            </span>
            <span className='wr-btn'>
              <input  className='btn' type='submit' value='百度一下'></input>
            </span>
          </form>
        </div>
      </div>
    )
  }
}

export default App
