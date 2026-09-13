
import bannerImg from '../assets/banner-stack.png';

function Hero() {
  return (
    <header id="home" className="bg-white py-12 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project flawlessly.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
            <a href="#technologies" className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold px-6 py-3 rounded-lg shadow hover:opacity-90">
              Explore Technologies
            </a>
            <button className="border border-gray-300 font-bold px-6 py-3 rounded-lg text-gray-700 bg-white hover:border-purple-600">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src={bannerImg} 
            alt="Dev Stack Banner" 
            className="w-full max-w-sm h-auto object-contain" 
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
