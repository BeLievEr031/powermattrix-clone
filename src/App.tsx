import Header from "./components/Header"
import BannerImg from "./assets/banner.png"

function App() {
  return (
    <div>
      <Header />
      <div
        className="h-[50vh] w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <h3 className="relative z-10 text-white text-center text-3xl font-bold uppercase tracking-[4px] font-montserrat pt-4">powermatrix</h3>


        <h3 className="text-[45px] sm:text-[50px] md:text-[64px] text-white relative z-10 font-serif text-center md:w-11/12 xl:w-1/2 pt-20 mx-auto">
          Powering Future World's Technologies
        </h3>

        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>
      <div className="pt-8">
        <h2 className="text-center font-serif text-4xl text-neutral-600 font-medium">Contact Us</h2>
        <div className="w-12 py-[.8px] bg-neutral-400 mx-auto mt-6"></div>
        <h2 className="mt-8 text-2xl text-center font-medium">Drop us a line!</h2>
      </div>
    </div >
  )
}

export default App