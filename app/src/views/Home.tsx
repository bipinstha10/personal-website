const Home = () => {
  return (
    <div className="flex-1 flex justify-center items-center overflow-hidden">
      <div className="md:w-[40%] text-center">
        <div className="flex flex-col justify-center ">
          <div className="relative w-[full] h-[100px]">
            <div className="absolute top-5 right-5 md:top-0 md:right-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
              <div className="sun bg-black dark:bg-white"></div>
            </div>
          </div>
          <h1 className="md:text-8xl text-5xl font-display font-bold mb-4">
            Hi. I'm Bipin. <br /> A Developer.
          </h1>
          <p className="md:text-lg font-sans text-gray-700 dark:text-gray-100">
            I’m an engineering student who loves coding, photography, and
            creative projects. I enjoy blending logic with artistry to build
            meaningful work.
          </p>
          <div className="relative w-[100px] h-[100px]">
            <div className="moon absolute top-0 left-5 md:left-[-5em]">
              <div className="crescentMoon relative w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
                <div className="circle  bg-black dark:bg-white"></div>
                <div className="crescent  bg-white dark:bg-black"></div>
              </div>
              <div className="star  bg-black dark:bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
