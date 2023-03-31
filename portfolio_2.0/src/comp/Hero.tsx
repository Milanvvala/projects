import React from "react";

const Hero = () => {
  return (
    <>
      <header className="flex flex-col justify-center  h-screen w-full" id="hero">
        <div className="p-1">
          <div className="font-bold text-3xl text-white md:text-6xl md:leading-[60px]">
            <h1>
              <span className="text-xl md:text-4xl">
                Hey There
                <span className="material-symbols-outlined w-10 h-10 ml-5 text-yellow-300">waving_hand</span><br />
              </span>

              This is Milan Vala,<br />
              a WEB<span className="material-symbols-outlined text-blue-500">language</span>
              <span className='font-mono'> Devloper</span>
              <span className="material-symbols-outlined text-lime-400">code</span> &
              <span className='font-serif'> Designer</span>
              <span className="material-symbols-outlined text-pink-500">palette</span><br />
            </h1>
          </div>
          {/* <p className="text-3xl text-white mt-6">
            Available for Freelance, Work & Collaborations.<br />
            I work with Curiosity.
          </p> */}
        </div>
      </header>
    </>
  );
};

export default Hero;
/*
<h1 className="font-bold max-w-md text-center text-3xl md:text-4xl md:text-left font-Inter">
            Hey There
            <span className="material-symbols-outlined text-4xl">waving_hand</span><br />
            This is Milan Vala,
            a <span className="material-symbols-outlined text-4xl text-blue-500">language</span>WEB<br />
            <span className="material-symbols-outlined text-4xl text-gray-500">code</span>
            <span className='font-extrabold font-RobotoMono text-slate-900'>Devloper</span> &<br />
            <span className="material-symbols-outlined text-4xl text-pink-500">palette</span>
            <span className='font-serif'>Designer</span><br />
            based in India.<br />
            Available for Freelance, Work & Collaborations.
          </h1>
          Milan Vala
            <br />I am a Web designer and a Front-end developer.
          </div>
*/