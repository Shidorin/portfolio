import { useState, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface IImageSlider {
  title: string;
  images: string[];
}

const ImageSlider = ({ title, images }: IImageSlider) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      nextImage();
    }

    if (touchStart - touchEnd < -150) {
      prevImage();
    }
  };

  const animateSlider = (offset: number) => {
    anime({
      targets: sliderRef.current,
      translateX: offset,
      easing: "easeOutExpo",
      duration: 500,
    });
  };

  const handleImageChange = (newImage: number) => {
    if (newImage > currentImage) {
      animateSlider(-100);
    } else {
      animateSlider(0);
    }
    setCurrentImage(newImage);
  };

  const prevImage = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImage === 0;
    const index = shouldResetIndex ? lastIndex : currentImage - 1;

    handleImageChange(index);
  };

  const nextImage = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImage === lastIndex;
    const index = shouldResetIndex ? 0 : currentImage + 1;

    handleImageChange(index);
  };

  return (
    <>
      <div className="relative h-80 w-full overflow-hidden md:hidden">
        <div
          className="absolute left-0 top-0 flex h-full w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={sliderRef}
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={`${title}-image-${index}`}
              className="h-full w-full flex-shrink-0 overflow-hidden"
            >
              <img
                src={`/images/${image}`}
                alt={`${title}-${index}`}
                className="h-80 w-full object-contain object-center brightness-90 filter"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
          <button
            onClick={nextImage}
            className="rounded-full text-primaryText"
            aria-label="left"
          >
            <MdKeyboardArrowLeft className="h-24 w-8" />
          </button>
          <button
            onClick={prevImage}
            className="rounded-full text-primaryText"
            aria-label="right"
          >
            <MdKeyboardArrowRight className="h-24 w-8" />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <img
          className="h-auto w-full object-cover object-center brightness-75 filter"
          src={`/images/${images[0]}`}
          alt={title}
        ></img>
        <img
          className="absolute bottom-8 right-8 object-contain filter md:h-64 lg:h-80 xl:h-96"
          src={`/images/${images[1]}`}
          alt={"mobile view of" + title}
        ></img>
      </div>
    </>
  );
};

export default ImageSlider;
