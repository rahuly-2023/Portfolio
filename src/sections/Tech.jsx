import React from "react";

import BallCanvas from "./canvas/Ball";
import  SectionWrapper  from "../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
        <div className='head-text'>Tech Stack</div>
        <div className='c-space bordermy-20 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} name={technology.name} />
            </div>
        ))}
        </div>
    </>
  );
};

export default SectionWrapper(Tech, "");