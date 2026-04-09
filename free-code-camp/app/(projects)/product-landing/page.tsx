import BackButton from "@/utils/BackButton"

function ProductLanding() {
  return (
    <>
      <main className="w-full flex flex-col bg-black text-white justify-center h-full items-center gap-4 ">
        <BackButton />
        <header id="header" className="w-full h-16 p-4 border-b border-white">
          <nav
            id="nav-bar"
            className="flex  justify-between items-center px-20"
          >
            <img
              id="header-img"
              src="https://cdn.simpleicons.org/bandlab"
              className="h-8"
            />
            <ul className="flex gap-8 ">
              <li>
                <a className="nav-link" href="#info">
                  Features
                </a>
              </li>
              <li>
                <a className="nav-link" href="#video">
                  How it Works
                </a>
              </li>
              <li>
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <form
          id="form"
          action="https://www.freecodecamp.com/email-submit"
          className="flex flex-col gap-2 justify-center items-center mb-24"
        >
          <p className="text-lg font-semibold">
            Handcrafted, home-made masterpieces
          </p>
          <input
            className="form-input"
            id="email"
            type="email"
            placeholder="enter your email"
            name="email"
          />
          <input id="submit" type="submit" className="button" />
        </form>

        <section id="info" className="flex flex-col gap-4 w-[50%] mb-24">
          <div>
            <p className="text-2xl font-semibold text-yellow-400">
              &#10031; Premium Materials
            </p>
            <p className="text-sm">
              Our trombones use the shiniest brass which is sourced locally.
              This will increase the longevity of your purchase.
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-yellow-400">
              &#10031; Fast Shipping
            </p>
            <p className="text-sm">
              We make sure you recieve your trombone as soon as we have finished
              making it. We also provide free returns if you are not satisfied.
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-yellow-400">
              &#10031; Quality Assurance
            </p>
            <p className="text-sm">
              For every purchase you make, we will ensure there are no damages
              or faults and we will check and test the pitch of your instrument.
            </p>
          </div>
        </section>

        <iframe
          id="video"
          height="315"
          className="w-[50%] h-[315px] mb-12"
          src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0"
        ></iframe>

        <section className="flex-box flex gap-8 mb-12" id="pricing">
          <div className="border border-gray-500 rounded md p-4 flex flex-col gap-2 justifu-center items-center">
            <span className="text-lg">Personal Plan</span>
            <p className="text-green-400 text-xl font-semibold">$300</p>
            <button className="button bg-yellow-400 text-black">Buy Now</button>
          </div>
          <div className="border border-gray-500 rounded md p-4 flex flex-col gap-2 justifu-center items-center">
            <span className="text-lg">&#10031; Business Plan</span>
            <p className="text-green-400 text-xl font-semibold">$1000</p>
            <button className="button bg-yellow-400 text-black">Buy Now</button>
          </div>
        </section>

        <footer className="flex flex-col gap-1 border-t border-white w-full justify-center items-center py-4">
          <ul className="flex gap-8 ">
            <li>
              <a className="nav-link" href="example.com">
                Privacy
              </a>
            </li>
            <li>
              <a className="nav-link" href="example.com">
                Terms
              </a>
            </li>
            <li>
              <a className="nav-link" href="example.com">
                Contact
              </a>
            </li>
          </ul>
          <p className="text-xs text-gray-300">
            Copyright 2001, Busineess Name
          </p>
        </footer>
      </main>
    </>
  )
}
export default ProductLanding
