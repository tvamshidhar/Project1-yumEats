import React,{useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
const Featured = () => {
    const sliders=[{
        url:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
    },
    {
     
        url:'https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.webp?b=1&s=612x612&w=0&k=20&c=l3r2EtHJQWKZhX5iqGmrkv4QMk2Z57HvaggU7RUd2k4='
    },
    {
        url:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg'
    },
]
    const [current,setCurrent]=useState(0)

    const prevSlider=()=>{
        const isFirstsilder= current===0
        const newIndex=isFirstsilder ? sliders.length-1: current-1
        setCurrent(newIndex)
    }
    
    
    const nextSlider=()=>{
        const isLastsilder= current===sliders.length-1
        const newIndex=isLastsilder ? 0: current+1
        setCurrent(newIndex)
    }

    const moveToNextSlide=(sliderIndex)=>{
      setCurrent(sliderIndex)
    }
   // url:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
      <div className=' w-full h-full rounded-2xl bg-center  bg-cover duration-500'
      style={{backgroundImage: `url(${sliders[current].url})`}}
      >

      </div>
      <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2x1 rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlider}/>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2x1 rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
    <BsChevronCompactRight onClick={nextSlider}/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {sliders.map((slidersItem,sliderIndex)=>(
           <div
            key={sliderIndex} onClick={()=>moveToNextSlide(sliderIndex)}
            className='text-2xl cursor-pointer'>
           <RxDotFilled/>
           </div>
        ))
       
        }
      </div>
    </div>
  )
}

export default Featured
