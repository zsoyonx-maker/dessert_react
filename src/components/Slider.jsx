import React from "react";
import { sliderData } from "../data/sliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Slider = (props) => {
    return (
        <section id="sliderType">
            <h2 className="blind">{props.title}</h2>
            <Swiper navigation={true} Pagination={true} modules={[Navigation, Pagination]} className="dessert_hero">
                {sliderData.map((slider) => (
                    <SwiperSlide key={slider.id}>
                        <div className={`slider_img ${slider.className}`}>
                            <div className="desc container">
                                <span>{slider.subtitle}</span>
                                <h3>{slider.title}</h3>
                                <p>{slider.desc}</p>
                                <div className="btn">
                                    <a href="#">자세히 보기</a>
                                    <a href="#" className="brown">
                                        사이트 보기
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;
