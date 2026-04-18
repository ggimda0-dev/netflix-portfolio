import React from 'react'
import nlogo from '../../assets/logo.svg';
import '../../components/common.css';
import './header.css';

const Header = () => {
  return (
    <>
        <header>
            <div className='n-container'>
              <div className='flex nav-bar'>
                <h1>
                  <div className='logo'> 
                    <img src={nlogo} alt="넷플릭스"/></div>
                </h1>
                <div className='flex'>
                  <div className='select-box'>
                    <select name="" id="" className='language'>
                      <option value="korea">한국어</option>
                      <option value="english">English</option>
                    </select>
                  </div>
                  <a href="/" className='n-btn'>로그인</a>
                </div>
              </div>
            </div>
        </header>
    </>
  )
}

export default Header