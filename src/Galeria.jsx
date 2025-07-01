import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/Galeria.css";

const images = [
  "https://i.postimg.cc/CLRD3SKr/MASAcrit_jun2025_25.jpg",
  "https://i.postimg.cc/d06L7x1T/MASAcrit_jun2025_39.jpg",
  "https://i.postimg.cc/6p70fCR3/MASAcrit_jun2025_6.jpg",
  "https://i.postimg.cc/CKGbc7KF/MASAcrit_jun2025_20.jpg",
  "https://i.postimg.cc/43Qh638y/MASAcrit_jun2025_29.jpg",
  "https://i.postimg.cc/Dy4JC6Ct/MASAcrit_jun2025_36.jpg",
  "https://i.postimg.cc/vTB9HdtB/MASAcrit_jun2025_21.jpg",
  "https://i.postimg.cc/3Jf1GtkV/MASAcrit_jun2025_8.jpg",
  "https://i.postimg.cc/zGSfMcTP/MASAcrit_jun2025_46.jpg",
  "https://i.postimg.cc/Y2bzcdz0/MASAcrit_jun2025_15.jpg",
  "https://i.postimg.cc/9Qqd7C5w/MASAcrit_jun2025_18.jpg",
  "https://i.postimg.cc/1X50nFsy/MASAcrit_jun2025_13.jpg",
  "https://i.postimg.cc/CKGbc7KF/MASAcrit_jun2025_20.jpg",
  "https://i.postimg.cc/rsK02NqR/MASAcrit_jun2025_31.jpg",
  "https://i.postimg.cc/k5Kvk9TP/MASAcrit_jun2025_11.jpg",
  "https://i.postimg.cc/fyp3zSb2/MASAcrit_jun2025_33.jpg",
  "https://i.postimg.cc/6p70fCR3/MASAcrit_jun2025_6.jpg",
  "https://i.postimg.cc/Y97z7VPG/MASAcrit_jun2025_10.jpg",
  "https://i.postimg.cc/VNKks0Gq/MASAcrit_jun2025_49.jpg",
  "https://i.postimg.cc/Dyw5m9w1/MASAcrit_jun2025_5.jpg",
  "https://i.postimg.cc/4xCKjcqn/MASAcrit_jun2025_35.jpg",
  "https://i.postimg.cc/43Qh638y/MASAcrit_jun2025_29.jpg",
  "https://i.postimg.cc/CLRD3SKr/MASAcrit_jun2025_25.jpg",
  "https://i.postimg.cc/zXQwv3M1/MASAcrit_jun2025_17.jpg",
  "https://i.postimg.cc/Qxv5sw98/MASAcrit_jun2025_26.jpg",
  "https://i.postimg.cc/3Jf1GtkV/MASAcrit_jun2025_8.jpg",
  "https://i.postimg.cc/FKNYH494/MASAcrit_jun2025_37.jpg",
  "https://i.postimg.cc/VvVtJHKF/MASAcrit_jun2025_23.jpg",
  "https://i.postimg.cc/cJyQ7209/MASAcrit_jun2025_19.jpg",
  "https://i.postimg.cc/h4yTZfK7/MASAcrit_jun2025_24.jpg",
  "https://i.postimg.cc/L8fPsDLz/MASAcrit_jun2025_27.jpg",
  "https://i.postimg.cc/Y97z7VPG/MASAcrit_jun2025_10.jpg",
  "https://i.postimg.cc/CKGbc7KF/MASAcrit_jun2025_20.jpg",
  "https://i.postimg.cc/Dyw5m9w1/MASAcrit_jun2025_5.jpg",
  "https://i.postimg.cc/QtnCmKc8/MASAcrit_jun2025_42.jpg",
  "https://i.postimg.cc/rsK02NqR/MASAcrit_jun2025_31.jpg",
  "https://i.postimg.cc/FK4LkSVw/MASAcrit_jun2025_28.jpg",
  "https://i.postimg.cc/mDrh7yzp/MASAcrit_jun2025_40.jpg",
  "https://i.postimg.cc/kG043rjL/MASAcrit_jun2025_43.jpg",
  "https://i.postimg.cc/6p70fCR3/MASAcrit_jun2025_6.jpg",
  "https://i.postimg.cc/zGSfMcTP/MASAcrit_jun2025_46.jpg",
  "https://i.postimg.cc/CLRD3SKr/MASAcrit_jun2025_25.jpg",
  "https://i.postimg.cc/SxwGTj7G/MASAcrit_jun2025_9.jpg",
  "https://i.postimg.cc/h4yTZfK7/MASAcrit_jun2025_24.jpg",
  "https://i.postimg.cc/d0s0KjBQ/MASAcrit_jun2025_48.jpg",
  "https://i.postimg.cc/VvVtJHKF/MASAcrit_jun2025_23.jpg",
  "https://i.postimg.cc/QtnCmKc8/MASAcrit_jun2025_42.jpg",
  "https://i.postimg.cc/CLRD3SKr/MASAcrit_jun2025_25.jpg",
  "https://i.postimg.cc/3Jf1GtkV/MASAcrit_jun2025_8.jpg",
  "https://i.postimg.cc/J72HcvQN/MASAcrit_jun2025_34.jpg",
  "https://i.postimg.cc/rsK02NqR/MASAcrit_jun2025_31.jpg",
  "https://i.postimg.cc/FKNYH494/MASAcrit_jun2025_37.jpg",
  "https://i.postimg.cc/qv8trRHw/MASAcrit_jun2025_38.jpg",
  "https://i.postimg.cc/CKGbc7KF/MASAcrit_jun2025_20.jpg",
  "https://i.postimg.cc/zGSfMcTP/MASAcrit_jun2025_46.jpg",
  "https://i.postimg.cc/L4whZfHv/MASAcrit_jun2025_44.jpg",
  "https://i.postimg.cc/d06L7x1T/MASAcrit_jun2025_39.jpg",
  "https://i.postimg.cc/9Qqd7C5w/MASAcrit_jun2025_18.jpg",
  "https://i.postimg.cc/43Qh638y/MASAcrit_jun2025_29.jpg",
  "https://i.postimg.cc/zXQwv3M1/MASAcrit_jun2025_17.jpg",
  "https://i.postimg.cc/Y2bzcdz0/MASAcrit_jun2025_15.jpg",
  "https://i.postimg.cc/d0s0KjBQ/MASAcrit_jun2025_48.jpg",
  "https://i.postimg.cc/JnTDF2CW/MASAcrit_jun2025_32.jpg",
  "https://i.postimg.cc/mDVCsrMJ/MASAcrit_jun2025_22.jpg",
  "https://i.postimg.cc/1X50nFsy/MASAcrit_jun2025_13.jpg",
  "https://i.postimg.cc/CKGbc7KF/MASAcrit_jun2025_20.jpg",
  "https://i.postimg.cc/Qxv5sw98/MASAcrit_jun2025_26.jpg",
];
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
    style={{ marginRight: "8px" }}
  >
    <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm5.75-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>
  </svg>
);

export default function Carrusel() {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <h1
        style={{
          textAlign: "center",
          margin: "20px 0 8px",
          fontFamily: "'Tektur', sans-serif",
        }}
      >
        Galería
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          cursor: "pointer",
        }}
      >
        <a
          href="https://www.instagram.com/lachica_dela_camara/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", color: "black", textDecoration: "none" }}
        >
          <InstagramIcon />
          la chica de la cámara
        </a>
      </p>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ width: "100%", height: "calc(100vh - 100px)" }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Masa Crítica ${idx + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
