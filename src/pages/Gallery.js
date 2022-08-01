import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Gallery.css";

import { Keyboard, Pagination, Navigation } from "swiper";
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Gallery() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${API_KEY}&user_id=196116593%40N05&per_page=58&page=1&format=json&nojsoncallback=1`
    )
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        if (jsonData.stat === "ok") {
          console.log(jsonData.photos);
          const searchResult = jsonData.photos.photo.map((item) => ({
            id: item.id,
            title: item.title,
            secret: item.secret,
            server_id: item.server,
          }));
          setResult(searchResult);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const images = result.map((item) => ({
    key: item.id,
    title: item.title,
    url: `https://live.staticflickr.com/${item.server_id}/${item.id}_${item.secret}_c.jpg`,
  }));

  return (
    <div className="gallery-page">
      <h1 className="gallery-page-title ">
        More deliciousness by foodie owner Gavin
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.url} alt={item.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
