import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallery from "./gallery";
import style from "./Hero.module.scss";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className={style.container}>
      <div className={style.box}>
        <Slider {...settings}>
          {gallery.map((image, index) => (
            <div className={style.gallery} key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
