import Gallery from "./Gallery";

const About = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="w-[80%] md:w-[65%]">
        <h1 className="md:text-8xl text-5xl font-display font-bold mb-8 mt-10 text-center">
          I'm Bipin.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-10">
          <div className="w-[300px] h-[350px] md:w-[400px] md:h-[450px] bg-red-950 rounded-t-full relative overflow-hidden">
            <img
              src="/images/Bipin.png"
              alt=""
              className="scale-130 absolute bottom-[-100px] left-5"
            />
          </div>
          <div>
            <p className="text-md text-gray-700 dark:text-gray-400 mt-8 md:mt-0 md:text-xl leading-8">
              an Electronics, Communication, and Information Engineering student
              at Pulchowk Campus.
              <br />
              I’m currently exploring my journey into full-stack web
              development, building small projects to sharpen my skills. My goal
              is to grow as a developer and create meaningful applications that
              combine design and functionality.
              <br />
              Outside of coding, I have a passion for photography. It started as
              a hobby and is still one of my favorite ways to capture memories.
              <br />
              When I’m not studying or coding, you’ll probably find me playing
              football, strumming the guitar, or enjoying a good anime series.
              <br />
              Thanks for stopping by. Feel free to check out my gallery, explore
              my projects, or just reach out to connect!
            </p>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-8 mt-10 text-center">
          My Photography
        </h1>
        <Gallery />
      </div>
    </div>
  );
};

export default About;
