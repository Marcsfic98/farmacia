const Home = () => {
  return (
    <section className="relative w-full h-125 bg-blue-600 flex items-center justify-center overflow-hidden font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/img/banner.jpg')",
        }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Sua Farmácia Digital 24h
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 drop-shadow-md">
          Cuidado e conveniência a qualquer hora, em qualquer lugar.
          <br className="hidden sm:inline" /> Receba seus medicamentos com
          rapidez e segurança.
        </p>
        <button className="bg-white cursor-pointer text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
          Conheça Nossos Serviços
        </button>
      </div>
    </section>
  );
};

export default Home;
