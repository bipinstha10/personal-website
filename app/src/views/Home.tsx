const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="md:w-[70%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-display font-bold mb-4">
            Hi there, I am Bipin.
          </h1>
          <p className="text-lg font-sans text-gray-700 dark:text-gray-100">
            I’m an engineering student who loves coding, photography, and
            creative projects. I enjoy blending logic with artistry to build
            meaningful work.
          </p>
        </div>
        <img
          src="/images/Bipin.png"
          alt="Bipin"
          className="w-full md:max-w-[800px] md:max-h-[90vh] h-auto object-contain mx-auto drop-shadow-2xl dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        />
      </div>
    </div>
  );
};

export default Home;
