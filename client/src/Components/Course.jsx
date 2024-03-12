import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [{image:"https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png",name:"HTML",id:"1",time:"3 week"},{image:"https://cdn-icons-png.flaticon.com/512/919/919826.png",name:"CSS",id:"2",time:"2 week"},{image:"https://banner2.cleanpng.com/20180605/yjb/kisspng-javascript-programmer-node-js-web-application-vector-markup-language-5b173fc1d0a463.9294246915282503058546.jpg",name:"JavaScript",id:"3",time:"4 week"},{image:"https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png",name:"React.js",id:"4",time:"5 week"},{image:"https://w7.pngwing.com/pngs/413/852/png-transparent-redux-react-logo-javascript-dq-purple-violet-text-thumbnail.png",name:"Redux.js",id:"5",time:"6 week"},{image:"https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",name:"Node.js",id:"6",time:"2 week"},{image:"https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",name:"Express.js",id:"7",time:"3 week"},{image:"https://i.pngimg.me/thumb/f/720/m2i8Z5b1G6K9G6m2.jpg",name:"Mongo DB",id:"8",time:"3 week"},]

export const Course = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      return (
        <div className="wrapper-container w-90% mt-10">
          <Slider {...settings} className='w-80%'>
          {data.map((item, index) => (
        <div key={index} className="mb-8">
          <div className="h-10 flex">
            <img
              src={item.image}
              alt="Green double couch with wooden legs"
              className="border-t-l-[20px] border-t-r-[20px] w-[80px] h-[70px] object-fill"
            />
            <div className="ml-4 sm:ml-10">
             
                <h2 className="text-start text-[12px] sm:text-[15px] md:text-[18px] font-medium text-blue-500">
                  {item.name}
                </h2>
               
               <p className='text-slate-600'>Duration: {item.time}</p>
             
             
            </div>
            <div className="ml-[-2px] sm:ml-[20px] md:ml-[10px]">
            </div>
          </div>
        </div>
      ))}
          </Slider>
        </div>
      );
}

