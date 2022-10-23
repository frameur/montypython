import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
// import { Carousel } from 'react-responsive-carousel'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import img1 from '../assets/images/montytroup.jpg'
import img2 from '../assets/images/monty-python-wallpaper-9.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/banniere.jpg'
import img5 from '../assets/images/monty-python-3.jpg'
import img6 from '../assets/images/monty-python-2.jpg'
import img7 from '../assets/images/monty-python-5.jpg'
import img8 from '../assets/images/monty-python-7.jpg'
import img9 from '../assets/images/monty-python-and-the-holy-grail-1.jpg'
import img10 from '../assets/images/monty-python-wallpaper-11.jpg'
import img11 from '../assets/images/monty-python-wallpaper-18.jpg'
import img12 from '../assets/images/monty-python-wallpaper-17.jpg'

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        autoplay={{
          delay: 4000,
          // disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <div className="container">
          <div className="swiper">
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="swiper-slide">
                  <img
                    style={{ backgroundSize: 'contain' }}
                    src={img1}
                    alt="la troupe des monty python"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={img2} alt="la troupe des monty python" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={img3} alt="la troupe des monty python" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={img4} alt="la troupe des monty python" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={img5} alt="la troupe des monty python" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={img6} alt="la troupe des monty python" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={img7} alt="la troupe des monty python" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={img8} alt="la troupe des monty python" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={img9} alt="la troupe des monty python" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={img10} alt="la troupe des monty python" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={img11} alt="la troupe des monty python" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src={img12} alt="la troupe des monty python" />
                </div>
              </SwiperSlide>
            </div>
          </div>
        </div>
      </Swiper>
      <h2 className="nameTroup">
        <span className="titleMembers">Former Members </span>
        Graham Chapman, John Cleese, Eric Idle, Michael Palin, Terry Gillian,
        Terry Jones,
        <br /> Monty Python <br /> Monty Python's Flying Circus.
      </h2>
    </div>
  )
}

export default Slider
