import BackButton from "@/utils/BackButton"

function Documentation() {
  return (
    <>
      <main
        className="w-full flex flex-col bg-black text-white justify-center h-full items-center gap-4"
        id="main-doc"
      >
        <BackButton />
        <nav
          id="navbar"
          className="flex flex-col gap-2 justify-center items-center h-20 border-b border-white w-full sticky"
        >
          <header className="title">Web Development</header>
          <div className="flex gap-2">
            <a className="nav-link" href="#JavaScript">
              JavaScript
            </a>
            <a className="nav-link" href="#Next_JS">
              Next JS
            </a>
            <a className="nav-link" href="#Tailwind_CSS">
              Tailwind CSS
            </a>
            <a className="nav-link" href="#TypeScript">
              TypeScript
            </a>
            <a className="nav-link" href="#Shadcn_UI">
              Shadcn UI
            </a>
          </div>
        </nav>

        <section
          className="main-section w-[70%] my-6 py-6 flex flex-col gap-y-2"
          id="JavaScript"
        >
          <header className="title">JavaScript</header>
          <p className="text-lg font-semibold">what is Javascript ?</p>
          <p className="text-sm">
            JavaScript is a scripting language that enables you to create
            dynamically updating content, control multimedia, animate images,
            and pretty much everything else. (Okay, not everything, but it is
            amazing what you can achieve with a few lines of JavaScript code.)
          </p>
          {/* <code>function greetMe(yourName) { alert("Hello " + yourName); }greetMe("World");</code> */}
          <li className="list-none underline hover:text-blue-500">
            <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript">
              Learn More &#8599;
            </a>
          </li>
        </section>

        <section
          className="main-section w-[70%] my-6 py-6 flex flex-col gap-y-2"
          id="Next_JS"
        >
          <header className="title">Next JS</header>
          <p className="text-lg font-semibold">What is Next JS ?</p>
          <p className="text-sm">
            Next.js is a React framework that allows you to build supercharged,
            SEO-friendly, and extremely user-facing static websites and web
            applications using the React framework. Next.js is known for the
            best developer experience when building production-ready
            applications with all the features you need.
          </p>
          <code>npx create-next-app@latest</code>
          <li className="list-none underline hover:text-blue-500">
            <a href="https://nextjs.org/docs#what-is-nextjs">
              Learn More &#8599;
            </a>
          </li>
        </section>

        <section
          className="main-section w-[70%] my-6 py-6 flex flex-col gap-y-2"
          id="Tailwind_CSS"
        >
          <header className="title">Tailwind CSS</header>
          <p className="text-lg font-semibold">what is Tailwind CSS ?</p>
          <p className="text-sm">
            Tailwind CSS is a utility-first CSS framework for rapidly building
            modern websites without ever leaving your HTML.
          </p>
          <code>npm install -D tailwindcss</code>
          <li className="list-none underline hover:text-blue-500">
            <a href="https://tailwindcss.com/">Learn More &#8599;</a>
          </li>
        </section>

        <section
          className="main-section w-[70%] my-6 py-6 flex flex-col gap-y-2"
          id="TypeScript"
        >
          <header className="title">TypeScript</header>
          <p className="text-lg font-semibold">What is TypeScript ?</p>
          <p className="text-sm">
            TypeScript is a strongly typed programming language that builds on
            JavaScript, giving you better tooling at any scale.
          </p>
          <code>npm install typescript --save-dev</code>
          <li className="list-none underline hover:text-blue-500">
            <a href="https://www.typescriptlang.org/">Learn More &#8599;</a>
          </li>
        </section>

        <section
          className="main-section w-[70%] my-6 py-6 flex flex-col gap-y-2"
          id="Shadcn_UI"
        >
          <header className="title">Shadcn UI</header>
          <p className="text-lg font-semibold">What is Shadcn UI ?</p>
          <p className="text-sm">
            Shadcn UI is Beautifully designed components that you can copy and
            paste into your apps. Accessible. Customizable. Open Source
          </p>
          <code>npx shadcn-ui@latest init</code>
          <li className="list-none underline hover:text-blue-500">
            <a href="https://ui.shadcn.com/">Learn More &#8599;</a>
          </li>
        </section>
      </main>
    </>
  )
}
export default Documentation
