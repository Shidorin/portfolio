import anime from "animejs";
import { forwardRef, useEffect, useRef } from "react";

const HomePage = forwardRef<HTMLDivElement>((props, ref) => {
  const elementRefs = useRef<HTMLHeadingElement[]>([]);
  const arrowRef = useRef(null);

  /* animate arrow */
  useEffect(() => {
    const arrowElement = arrowRef.current;
    anime({
      targets: arrowElement,
      translateY: ["20%", "60%"],
      easing: "easeInOutSine",
      duration: 1000,
      direction: "alternate",
      loop: true,
    });
  }, []);

  /* animate order */
  useEffect(() => {
    const elements = elementRefs.current.filter(
      (el) => el !== null
    ) as HTMLHeadingElement[];
    anime.set(elements, { opacity: 0 });
    anime
      .timeline({
        easing: "easeOutExpo",
      })
      .add(
        {
          targets: elements[0],
          opacity: 1,
          translateY: [-50, 0],
          duration: 1400,
        },
        "400"
      )
      .add(
        {
          targets: elements[1],
          opacity: 1,
          translateY: [-50, 0],
          duration: 2600,
        },
        "1000"
      )
      .add(
        {
          targets: elements[2],
          opacity: 1,
          duration: 1000,
        },
        "1400"
      );
  }, []);

  const scrollDown = () => {
    const windowHeight = window.innerHeight;
    window.scrollBy({
      top: windowHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative mx-auto min-h-[100dvh] w-auto max-w-7xl px-4">
      <div
        className="justify-center pt-28 text-dark md:pt-60 xl:pt-72"
        ref={ref}
      >
        <h1
          ref={(el) => (elementRefs.current[0] = el as HTMLDivElement)}
          className="my-12 text-4xl font-bold md:text-5xl"
        >
          Hello, I'm Wojtek
        </h1>
        <h1
          ref={(el) => (elementRefs.current[1] = el as HTMLDivElement)}
          className="my-20 text-3xl font-bold  text-primaryText md:text-5xl lg:my-24"
        >
          I'm Frontend Software Engineer, something something, and something
          something
        </h1>
      </div>
      <div
        ref={(el) => (elementRefs.current[2] = el as HTMLDivElement)}
        className="absolute bottom-12 right-32 mb-10 translate-x-full transform md:right-80"
      >
        <div
          className="relative h-16 w-1 rotate-45 transform cursor-pointer bg-primaryText lg:h-24"
          ref={arrowRef}
          onClick={scrollDown}
        >
          <div className="absolute -bottom-2 -left-6 h-24 w-12 bg-transparent"></div>
          <i
            className="absolute -left-2 bottom-0 rotate-45 transform border-b-4 border-r-4
           border-primaryText p-2 lg:-left-4 lg:bottom-1 lg:p-4"
          ></i>
        </div>
      </div>
    </section>
  );
});
export default HomePage;
