import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import imageOne from './League/league-image.jpg'
import imageTwo from './League/league-image2.jpg'
import imageThree from './League/league-image3.jpg'
import imageFour from './League/league-image4.jpg'
import imageFive from './League/league-image5.jpg'
import imageSix from './League/league-image6.jpg'
import './slider.css'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 340 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const sliderImageUrl = [
      //First image url
      {
        url:
        imageOne
      },
      {
        url:
        imageTwo
      },
      //Second image url
      {
        url:
        imageThree
      },
      //Third image url
      {
        url:
        imageFour
      },
    
      //Fourth image url
    
      {
          url:
          imageFive
      },
      {
          url:
          imageSix
      }

    ];
const LeagueSlide = () => {
  return (
    <div className="parent">
      <h2 className="slide-title">League Slide Content</h2>
            <Carousel
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={true}
              infinite={true}
              partialVisible={false}
              focusOnSelect={true}
            >
              {sliderImageUrl.map((imageUrl, index) => {
              return (
                  <div className="slider" key={index}>
                  <img src={imageUrl.url} alt="League Image" />
                  </div>
              );
              })}
            </Carousel>
    </div>
  )
}

export default LeagueSlide
