import { Swiper, SwiperSlide } from "swiper/react";
import { skills } from "../../data/skills";
import { Autoplay } from "swiper/modules";
import '../../css/carousel.css';

const Carousel: React.FC = () => {


  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          200: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 8,
          },
          1200: {
            slidesPerView: 9,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {skills &&
          skills.map((skill, i) => (
            <SwiperSlide className="text-center" key={i}>
              <div className="flex justify-center">
                <img
                  className="carousel-img"
                  src={skill.image}
                  alt={skill.name}
                  draggable="false"
                />
              </div>
              <h2 className="carousel-text">{skill.name}</h2>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
export default Carousel;