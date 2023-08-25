import mvp from '../assets/mvp.png'
const About = () => {
  return (
    <>
      <div className="about grid md:grid-cols-2  " id="about" >
        <div>
          <div className="font-bold text-4xl text-white md:text-6xl md:leading-[60px]">About me</div>
          <div>
            I am Milan Self Taught Web Designer & Developer. Currently Looking
            for New and Exiting Projects to Work on. From Start i always Surfed
            Web With Curiosity To Find something New to Learn, Now i am The one
            Building Websites This Feels Like Dream.
          </div>
          <br />
          <div className="text-xl font-bold text-white">Skills</div>
          <div>Web Design</div>
          <div>Web Development</div>
          <br />
          <div className="text-xl font-bold text-white">Tech Stack</div>
          <div className="flex space-x-6 mt-2 ">
          <img height="32" width="32" src="https://cdn.simpleicons.org/html5/#E34F26" title="HTML 5" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/css3/#1572B6" title="CSS 3" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/javascript/#F7DF1E" title="JavaScript" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/react/#61DAFB" title="React" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/tailwindcss/#06B6D4" title="Tailwind CSS" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/figma/#F24E1E" title="Figma"/>
          </div>
        </div>
      <img
        className="max-w-full w-full mt-6 md:mt-0"
        src={mvp}
        alt="picture"
      />
      </div>
    </>
  );
};

export default About;
