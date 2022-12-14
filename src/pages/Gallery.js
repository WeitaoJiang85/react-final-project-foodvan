import React from "react";
import { useState, useEffect } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "../styles/Gallery.css";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Gallery() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${API_KEY}&user_id=196116593%40N05&per_page=30&page=1&format=json&nojsoncallback=1`
    )
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        if (jsonData.stat === "ok") {
          const searchResult = jsonData.photos.photo.map((item) => ({
            id: item.id,
            title: item.title,
            secret: item.secret,
            server_id: item.server,
          }));
          setResult(searchResult);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading === true) return <h1>Loading...</h1>;
  return (
    <div className="gallery-page">
      <h1 className="gallery-page-title ">
        More deliciousness by foodie owner Gavin
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {result.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={`https://live.staticflickr.com/${item.server_id}/${item.id}_${item.secret}_c.jpg`}
              alt={item.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
