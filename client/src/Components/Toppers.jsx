import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const data = [{image:"https://business.pitt.edu/wp-content/uploads/2021/06/home-4.jpg",name:"Mahendra",package:"10",developer:"Java",about:"I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously. I look forward to taking another class with you."},
{image:"https://cba.pitt.edu/wp-content/uploads/2019/05/microcredentials-web-page.jpg",name:"Mohandas",package:"8",developer:"Fronted",about:"I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously. I look forward to taking another class with you."},
{image:"https://onlinepostgrad.com/wp-content/uploads/2022/04/shutterstock_185581007-1-1-768x558.png",name:"Rakesh",package:"12",developer:"Backend",about:"I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously. I look forward to taking another class with you."},
{image:"https://imageio.forbes.com/specials-images/imageserve/63c98cdb5c0fc8a49c766ec0/Young-woman-sitting-at-a-desk-in-front-of-a-computer/960x0.jpg?height=460&width=711&fit=bounds",name:"Amrita",package:"11",developer:"MERN",about:"I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously. I look forward to taking another class with you."},{image:"https://www.shutterstock.com/image-photo/portrait-beautiful-young-intelligentlooking-indian-600nw-1433736386.jpg",name:"Deepti",package:"13",developer:"MEAN",about:"I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously. I look forward to taking another class with you."},{image:"https://media.istockphoto.com/id/1389017464/photo/man-wearing-button-down-shirt-and-eyeglasses-poses-for-photo.jpg?s=612x612&w=0&k=20&c=_vWOPqcocxJzG_Fpfd7zAPpDQr6EjRFF62VRfdj19TY=",name:"Ishaan",package:"15",developer:"java",about:"I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously. I look forward to taking another class with you."},{image:"https://remembermephotography.com/wp-content/uploads/2016/04/BD008cc.jpg",name:"Suraj",package:"9",developer:"Full Stack Developer",about:"I received my certificate, and I would like to thank you for your support. Your course was challenging, but you were always there supporting me and ready to help. I enjoyed your class tremendously. I look forward to taking another class with you."}]

export const Toppers = () => {
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
        <div className="wrapper-container w-90% mt-10  mb-[80px] ">
          <Slider {...settings} >
          {data.map((item, index) => (
            <div key={index} className="mb-8 gap-4 ">
              <div className="w-[320px] rounded-b-lg max-h-[800px] shadow-md">
              <img
                        src={item.image}
                        alt="Green double couch with wooden legs"
                        className="border-t-l-[20px] border-t-r-[20px] w-[80px] sm:w-[150px] md:w-[250px] h-[320px] object-fill rounded-lg mx-8"
                    />
              
                  <div className="flex justify-between">
                    <h2 className="text-start  text-lg font-bold text-grey-950 ml-[10px]">
                      {item.name} 
                    </h2>
                    <p className="text-end text-[12px] sm:text-[14px] font-medium text-blue-600 mr-[10px]">
                      Package:{item.package} CTC
                    </p>
                    </div>
                    
                   <div>
                   <p className="text-blue-600 text-start">({item.developer} Developer)</p>
                   
                   
                   </div>
                    <p className="text-blue-600 ">
                      {item.about.substring(0, 100)} ...
                    </p>
                  
                  <div className="ml-[-2px] sm:ml-[20px] md:ml-[10px]">
                    <button className="bg-blue-500 text-white px-4 py-2 mb-[10px] rounded-md text-lg">
                      Know more
                    </button>
                  </div>
                </div>
              </div>
            ))}
              </Slider>
          </div>
        );
}

