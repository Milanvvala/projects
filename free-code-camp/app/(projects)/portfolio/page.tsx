import BackButton from "@/utils/BackButton"

function Portfolio() {
  return (
    <>
      <main className="w-full flex flex-col bg-black text-white justify-start h-full items-center gap-4">
        <BackButton />
        <nav
          id="navbar"
          className="flex justify-end items-center px-20 w-full h-16 p-4 border-b border-white"
        >
          <ul className="flex gap-8 ">
            <li>
              <a className="nav-link text-blue-300 " href="#welcome-section">
                About
              </a>
            </li>
            <li>
              <a className="nav-link text-blue-300 " href="#projects">
                Work
              </a>
            </li>
            <li>
              <a className="nav-link text-blue-300 " href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <section
          id="welcome-section"
          className="flex justify-center items-center flex-col gap-4 h-screen"
        >
          <h1 id="title" className="font-bold text-6xl">
            Hi I am Milan
          </h1>
          <p id="role" className="italic text-blue-300 text-xl">
            a Web Developer
          </p>
        </section>

        <section
          id="projects"
          className="flex flex-col justify-center items-center w-[50%] h-screen"
          // className=" gap-4 h-screen"
        >
          <h3 className="project-tile font-bold text-6xl mb-8" id="">
            Work
          </h3>
          <div className="flex gap-8 flex-col justify-center items-center px-8">
            <div className="p-4 border border-white rounded-md">
              <p className="text-lg font-semibold" id="project-title">
                Redix UI Templates
              </p>
              <p className="text-sm" id="project-description">
                Tools : NextJS, Redix UI, Vercel Build your Website Faster with
                Prebuilt Responsive Components and Templates using Redix UI.
              </p>
              <a
                className="nav-link text-blue-300 "
                href="https://redix-ui-templates.vercel.app/"
              >
                Live &#8599;
              </a>
            </div>
            <div className="p-4 border border-white rounded-md">
              <p className="text-lg font-semibold" id="project-title">
                E-Commerce Web App
              </p>
              <p className="text-sm" id="project-description">
                Tools : TypeScript, React, Chakra UI Web App With Functionalitys
                like Add to Cart , Auto Price Calculation , Remove From Cart
                with Responsive Chakra Ui.
              </p>
              <a
                className="nav-link text-blue-300 "
                href="https://mv-tsproject.netlify.app/"
              >
                Live &#8599;
              </a>
            </div>
            <div className="p-4 border border-white rounded-md ">
              <p className="text-lg font-semibold" id="project-title">
                React Dashboard
              </p>
              <p className="text-sm" id="project-description">
                Tools : React, CSS Dashboard Built with ReactJS and Vanilla CSS
              </p>
              <a
                className="nav-link text-blue-300 "
                href="https://react-dashboard-k0o0.onrender.com/"
              >
                Live &#8599;
              </a>
            </div>
          </div>
          {/* <a href="example.com">Project link</a> */}
        </section>

        <section
          id="contact"
          className="flex justify-center items-center flex-col gap-4 h-screen"
        >
          <h1 id="title" className="font-bold text-6xl">
            Let's work together...
          </h1>
          <p id="role" className="italic text-blue-300 text-xl">
            How do you take your coffee?
          </p>
          <div className="flex gap-8">
            <a href="example.com" target="_blank" id="profile-link">
              <img
                height="48"
                width="48"
                src="https://cdn.simpleicons.org/github/_/eee"
              />
            </a>
            <a href="example.com" target="_blank" id="profile-link">
              <img
                height="48"
                width="48"
                src="https://cdn.simpleicons.org/linkedin/_/eee"
              />
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
export default Portfolio
