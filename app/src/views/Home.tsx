const Home = () => {
  return (
    <div className="flex-1 flex justify-center items-center overflow-hidden">
      <div className="md:w-[40%] text-center">
        <div className="flex flex-col justify-center ">
          <div className="relative w-full h-[100px]">
            <span className="sun absolute bg-black dark:bg-white top-0 right-0"></span>
          </div>
          <h1 className="md:text-8xl text-5xl font-display font-bold mb-4">
            Hi. I'm Bipin. <br /> A Developer.
          </h1>
          <p className="md:text-lg font-sans text-gray-700 dark:text-gray-100">
            I’m an engineering student who loves coding, photography, and
            creative projects. I enjoy blending logic with artistry to build
            meaningful work.
          </p>
          <div className="relative w-full h-[100px]">
            <div className="moon absolute top-0 left-0">
              <div className="crescentMoon">
                <div className="crescent bg-black dark:bg-white"></div>
                <div className="circle bg-white dark:bg-black"></div>
                <div className="star bg-black dark:bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
