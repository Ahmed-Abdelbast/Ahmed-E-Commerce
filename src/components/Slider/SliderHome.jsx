// eslint-disable-next-line no-unused-vars
import React from 'react'
import Slider from 'react-slick';
import slide3 from '../../assets/slide3.jpg'
import slide2 from '../../assets/slide2.jpg'
import slide5 from '../../assets/lap.jpg'

export default function SliderHome() {



    const settings = {
        dots: true,
        infinite: true,
       
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay: true, 
        autoplayspeed:200
      };
  return (
    <>


  
<Slider {...settings} className="text-white">
    <div >
      <img src={slide3} className=" object-cover block w-full h-80 " alt="..." />
    </div>
    
    <div >
      <img src={slide2} className=" object-cover block w-full h-80 " alt="..." />
    </div>
    
    <div >
      <img src={slide5} className=" object-cover block w-full h-80 " alt="..." />
    </div>
    
    <div >
      <img src={slide3} className=" object-cover block w-full h-80 " alt="..." />
    </div>
    
    <div >
      <img src={slide2} className=" object-cover block w-full h-80  " alt="..." />
    </div>
    </Slider>
  



    
    
    
    
    
    </>
  )
}
