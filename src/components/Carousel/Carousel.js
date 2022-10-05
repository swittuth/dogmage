import { useContext } from "react";
import { InfoContext } from "../../infocontext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "../../styling/carouselStyling.css";

export const Carousel = () => {
  const { imageArray } = useContext(InfoContext);

  return (
    <>
      <Swiper
        direction="vertical"
        modules={[Mousewheel, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        mousewheel={true}
        pagination={{ clickable: true }}
      >
        {imageArray.map((image) => {
          return (
            <SwiperSlide key={`${image}`}>
              <img src={image} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
