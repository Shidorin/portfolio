import { forwardRef, useEffect, useRef, useState } from "react";
import { Skill, SkillsData } from "../types";
import { skillData } from "../data/data";
import anime from "animejs";

const AboutPage = forwardRef<HTMLDivElement>((props, ref) => {
  const [skillsData, setSkillsData] = useState<SkillsData>();
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("../data/data.json");
      // const data = await response.json();
      setSkillsData(skillData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const element = skillRef.current;
    if (element) {
      const handleScroll = () => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.8) {
          anime({
            targets: element,
            translateY: ["100px", "0px"],
            opacity: [0, 1],
            easing: "easeOutCubic",
            duration: 1000,
          });
          window.removeEventListener("scroll", handleScroll);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [skillRef]);

  const skillsTSX = (
    <>
      {skillsData?.skills.map((skillSet) => (
        <div
          key={skillSet.title}
          className="flex flex-col items-center md:w-1/3"
        >
          <h3 className="text-4xl">{skillSet.title}</h3>
          <div className="flex flex-wrap content-center items-center text-xl">
            {skillSet.stacks.map((skill: Skill) => (
              <div
                key={skill.name}
                className="m-6 flex w-1/3 flex-shrink-0 flex-grow-0 flex-col items-center justify-center text-center"
              >
                <div className="h-16 w-16 items-center justify-center flex">
                  <img
                    src={`/icons/${skill.img}`}
                    className="m-auto block w-16 bg-auto bg-center bg-no-repeat"
                    alt={skill.name}
                  />
                </div>
                <p className="mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section ref={ref} className="">
      <div className=" clip-container relative overflow-hidden bg-primaryText py-20 lg:pb-64">
        <h2 className="mx-auto w-fit pb-10 text-5xl text-white">Skills</h2>
        <div
          className="mx-auto flex max-w-7xl flex-col text-white
          opacity-0 md:flex-row "
          ref={skillRef}
        >
          {skillsTSX}
        </div>
      </div>
    </section>
  );
});

export default AboutPage;
