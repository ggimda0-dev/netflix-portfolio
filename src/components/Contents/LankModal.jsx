import React, { useEffect } from 'react'
import "../Contents/Contents";
import "./lankModal.css";

export const LankModal = ({data, onClose}) => {
    useEffect(()=>{
        document.body.style.overflow = "hidden";
        return()=>{
            document.body.style.overflow = "auto";
        };
    },[]);
  return (
    <>
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e)=>e.stopPropagation()}>
                <div className='modal-img'>
                    <button onClick={onClose} className='close-btn '><span className='blind'>닫기</span></button>
                    <img src={data.img} alt={data.title} />
                </div>
                <div className='modal-bottom'>
                    <p className='modal-title'>{data.title}</p>
                    <p>가짜일지라도 명품이 되고 싶었던 여자 사라킴. 어디서나 그녀의 이름을 들을 수 있지만 어디서도 진짜 그녀를 만날 수는 없다. 예리한 시선과 끈질긴 집념의 형사 무경이 그 미스터리한 정체를 추적한다.</p>
                    <a href="" className='n-btn'>시작하기</a>
                </div>
            </div>
        </div>
    </>
  )
}
