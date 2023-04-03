import fsa from '../assets/fsa.png'
import awwr from '../assets/awwr.png'
import ec from '../assets/ec.png'

const Projects = () => {
  const Projects = [
    {
      id: 1,
      src: fsa,
      title: "Full Stack App",
      category: "Frontend, Backend",
      subtitle: "React, Node, Express, MongoDB",
      link:'https://bookmarkingapp.onrender.com/',
      code:'https://github.com/Milanvvala/projects/tree/main/bookmark'
    },
    {
      id: 2,
      src: awwr,
      title: "Website Redesign",
      category: "Design",
      subtitle: "Figma",
      link:'https://www.figma.com/file/dRAbBqltBSNA8dOeckyOjh/AW-Site?node-id=2-3',
      code:'https://www.figma.com/file/dRAbBqltBSNA8dOeckyOjh/AW-Site?node-id=2-3'
    },
    {
      id: 3,
      src: ec,
      title: "Ecommerce Website",
      category: "Frontend Devleopment",
      subtitle: "HTML5, CSS3, JavaScript",
      link:'https://mv-ecommerce-site.netlify.app/',
      code:'https://github.com/Milanvvala/projects/tree/main/Ecommerce-site'
    },
  ];

  return (
    <>
    <h2 className="font-bold text-4xl text-white md:text-6xl md:leading-[60px]" id="projects">Projects</h2>
      <div className="grid gap-y-10 gap-x-5 md:grid-cols-3">
        {Projects.map((pro) => {
          return (
            <div key={pro.id}>
              <img className="max-w-full w-full" src={pro.src} alt="project picture" />
              <div className="project-title font-bold">{pro.title}</div>
              <div>{pro.category}</div>
              <div className=" text-gray-400 text-base leading-4">{pro.subtitle}</div>
              <div className='flex space-x-6 text-blue-500 font-bold'> 
              <a className='cursor-pointer text-lg hover:text-blue-300 hover:underline' href={pro.code} target='_blank' >Code &#x2192;</a>
              <a className='cursor-pointer text-lg hover:text-blue-300 hover:underline' href={pro.link} target='_blank' >Live &#x2192;</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
