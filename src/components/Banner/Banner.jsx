import React from 'react'
import '../../components/common.css';
import './banner.css'

const Banner = () => {
  return (
    <>
      <div className='n-container'>
        <div className='flex banner-wrap'> 
          <div className='b-font'>
            <h2>영화, 시리즈 등을 무제한으로</h2>
            <p className='second-text'>7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</p>
            <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
          </div>
          <div className='email-ad'>
            <div className='e-box'>
              <input id='e-form' type="email" placeholder=" "/>
              <label htmlFor="e-form" className='email-font'>이메일 주소</label>
            </div>
            <button className='start-btn' type='submit'>시작하기</button>
          </div>
        </div>
        
      </div>
    
    </>
)
}

export default Banner