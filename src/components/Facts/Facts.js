import React from 'react';
import SlideFacts from './SlideFacts';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Facts.scss';

SwiperCore.use([Navigation, Pagination]);

const Facts = ({ title, slides }) => {
  const factsSlides = slides.map((slideInfo) => (
    <SwiperSlide key={slideInfo.id}>
      <SlideFacts item={slideInfo}/>
    </SwiperSlide>
  ));
  return (
    <section className="facts container" id="facts">
      <h2 className="facts-title">{title}</h2>
      <div className="swiper-button-prev" />
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        slidesPerGroup={3}       
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10
          },
          520: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}

        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
					el: '.facts-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return `<span class="facts-pagination-bullet ${className}"></span>`;
					},
        }}        
      >
        {factsSlides}
      </Swiper>
      <div className="swiper-button-next" />
      <div className="facts-pagination" />
    </section>
  );
};

export default Facts;
