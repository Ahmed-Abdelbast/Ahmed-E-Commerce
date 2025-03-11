/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Slider from 'react-slick';

export default function SliderCategories({category}) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true, 
        autoplayspeed:50,
        responsive: [
            {
              breakpoint: 1024, // للأجهزة اللوحية الكبيرة
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 768, // للأجهزة اللوحية الصغيرة
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 480, // للموبايلات
              settings: {
                slidesToShow: 2,
              }
            }
          ]
      };
  return (

    <>


<Slider {...settings}>


    {category ? category?.data?.data?.data.map((categ)=>{return               <div key={categ._id}>
              <img src={categ.image} className="w-full h-60 " alt="" />
              <p className="text-center">{categ.name}</p>
            </div> }):""}


    </Slider>
    
    
    
    
    
    
    </>
    
  )
}
