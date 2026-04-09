import BackButton from "@/utils/BackButton"

function TributePage() {
  return (
    <>
      <main className="w-full flex flex-col bg-black text-white justify-center h-screen items-center gap-4">
        <BackButton />
        <h1 id="title" className="font-bold text-4xl">
          Stephen Hawking
        </h1>
        <p id="description" className="font-light text-xl">
          cosmologist
        </p>
        <section className="flex flex-col justify-center items-center gap-2">
          <figure id="img-div" className="flex items-center justify-center">
            <figcaption id="img-caption" className="hidden">
              Stephen William Hawking
            </figcaption>
            <img
              className="w-64"
              id="image"
              src="https://cdn.britannica.com/92/233692-050-0C8D8C13/Stephen-Hawking-2007.jpg"
            />
          </figure>
          <p id="tribute-info" className="w-[60%] text-center">
            Stephen William Hawking (8 January 1942 – 14 March 2018) was an
            English theoretical physicist, cosmologist, and author who was
            director of research at the Centre for Theoretical Cosmology at the
            University of Cambridge. Between 1979 and 2009, he was the Lucasian
            Professor of Mathematics at Cambridge, widely viewed as one of the
            most prestigious academic posts in the world.[19]
          </p>
          <a
            className="hover:text-blue-500 underline"
            href="https://en.wikipedia.org/wiki/Stephen_Hawking"
            id="tribute-link"
            target="_blank"
          >
            Tribute Link
          </a>
        </section>
      </main>
    </>
  )
}
export default TributePage
