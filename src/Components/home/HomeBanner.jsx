import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay, EffectFade } from 'swiper/modules';
import { bannerList } from '../../utils';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const HomeBanner = () => {

    const colors = ["bg-banner-color1", "bg-banner-color2", "bg-banner-color3", "bg-banner-color4"];
  return (
    <div className='py-2 rounded-md'>
        <Swiper
            grabCursor={true}
            autoplay={{
                 delay: 3000 ,
                 disableOnInteraction: false ,
                }}
                navigation
                modules={[Pagination, Navigation, EffectFade, Autoplay]}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}>
                    
                    {bannerList.map((item, i) => (
                        <SwiperSlide key={item.id} >
                            <div className= {`carousel-item rounded-md sm:h-[500px] h-96 ${colors[i]}`}>
                                <div className='flex items-center justify-center' >
                                    <div className='hidden lg:flex justify-center w-3/4 p-8'>
                                    <div className='text-center text-white font-bold'>
                                        <h3 className='text-3xl text-white font-bold'>
                                            {item.title}
                                        </h3>

                                        <h1 className='text-5xl text-white font-bold mt-2'>
                                            {item.subtitle}
                                        </h1> 
                                        <p className='text-white font-bold mt-4'>
                                            {item.description}
                                        </p>

                                        <Link className='mt-6 inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-' to="/products">
                                        Shop
                                        </Link>
                                    </div>
                                </div>
                                <div className='w-full flex justify-center lg:w-1/2 p-4'>
                                    <img src={item?.image} alt="" />
                                </div>
                                </div>
                            </div>
                     </SwiperSlide> 
                    ))}
        </Swiper>



    </div>
  )
}

export default HomeBanner