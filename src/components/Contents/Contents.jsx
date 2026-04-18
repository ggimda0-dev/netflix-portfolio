import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";
import '../../components/common.css';
import './contents.css';
import "swiper/css";
import 'swiper/css/navigation';
import popcorn from '../../assets/popcorn.png'
import lank1 from "../../assets/cardimg1.webp";
import lank2 from "../../assets/cardimg2.webp";
import lank3 from "../../assets/cardimg3.webp";
import lank4 from "../../assets/cardimg4.webp";
import lank5 from "../../assets/cardimg5.webp";
import lank6 from "../../assets/cardimg6.webp";
import lank7 from "../../assets/cardimg7.webp";
import lank8 from "../../assets/cardimg8.webp";
import lank9 from "../../assets/cardimg9.webp";
import lank10 from "../../assets/cardimg10.webp";
import { useState } from "react";
import { LankModal } from "./LankModal";

const lankData = [
  {id:1, img: lank1, title: "레이디두아"},
  {id:2, img: lank2, title: "죠죠의 기묘한 모험 스틸볼런"},
  {id:3, img: lank3, title: "월간남친"},
  {id:4, img: lank4, title: "브리저튼"},
  {id:5, img: lank5, title: "신명"},
  {id:6, img: lank6, title: "언더커버미쓰홍"},
  {id:7, img: lank7, title: "워머신전쟁기계"},
  {id:8, img: lank8, title: "신이랑법률사무소"},
  {id:9, img: lank9, title: "약한영웅"},
  {id:10, img: lank10, title: "bts"},
]

const Contents = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectItem, setSeletItem] = useState(null);

  const handleOpen = (lank) => {
    setSeletItem(lank);
    setIsOpen(true);
  };

  return (
    <>
      <div className='n-container'>
        <div className='flex membership-box'>
          <div className='popcorn'>
            <img src={popcorn} alt="팝콘"/>
          </div>
          <div className='flex membership-font'>
            <div>
              <p className='f-bold'>7,000원이면 만날 수 있는 넷플릭스.</p>
              <p>가장 경제적인 광고형 멤버십을 이용해 보세요.</p>
            </div>
            <div className='see-btn'>
              <a href="">자세히 알아보기</a>
            </div>
          </div>
        </div>
        <div className='now-contents  pt-60'>
          <h3>지금 뜨는 콘텐츠</h3>
          <div className='now-listBox'>
            <Swiper
              modules={[Navigation]}
              navigation
              
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                768: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
                991: {
                  slidesPerView: 5,
                  slidesPerGroup: 5,
                },
                1200: {
                  slidesPerView: 6,
                  slidesPerGroup: 6,
                },
              }}
              spaceBetween={30}
              className="mySwiper rank-swiper"
            >
              {lankData.map((lank, i) => (
              <SwiperSlide key={lank.id}>
                <div className='lank-card' onClick={()=>handleOpen(lank)}>
                  <img src={lank.img} alt={lank.title} />
                  <span className='lank-num'>{i + 1}</span>
                </div>
              </SwiperSlide>
              ))}
            </Swiper>

            {/* 모달 */}
            {isOpen && (
              <LankModal
                data={selectItem}
                onClose={()=>setIsOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Contents