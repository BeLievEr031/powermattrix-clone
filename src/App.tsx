import Header from "./components/Header"
import BannerImg from "./assets/banner.png"
import Footer from "./components/Footer"
import Input from "./components/Input"

function App() {
  return (
    <div className="bg-[#f6f6f6]">
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

        <div className="w-11/12 sm:w-1/2 mx-auto pt-8">
          <form className="space-y-2">

            <Input
              label="name"
              name="name"
              type="text"
              value=""
              key={Date.now()}
            />

            <Input
              label="email*"
              name="email"
              type="Email"
              value=""
              key={Date.now()}
            />

            <textarea
              name="message"
              rows={7}
              className="resize-none rounded-sm bg-white w-full border-2 border-neutral-300 p-2 outline-none"
              placeholder="Message"
              required
            ></textarea>

            <div className="flex flex-col items-center mt-2">
              <div className="space-x-2">
                <input type="checkbox" className="h-5 w-5 translate-y-0.5 shadow-sm bg-transparent" required />
                <span className="text-neutral-500 font-[500] text-[18px]">Sign up for our email list for updates, promotions, and more.</span>
              </div>
              <button type="submit" className="bg-black hover:bg-black/90 cursor-pointer transition-all px-6 py-4 rounded-md font-bold tracking-widest text-white uppercase mt-8">Send</button>
            </div>
          </form>

        </div>
      </div>

      <Footer />
    </div >
  )
}

export default App