import Gallery from "./Gallery";

const About = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[80%] md:w-[65%]">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 mt-10 text-center">
          About Me
        </h1>
        <p className="text-center text-md/5">
          Hi, I’m Bipin Shrestha, <br />a third-year Electronics, Communication,
          and Information Engineering student at Pulchowk Campus.
          <br />
          I’m currently exploring my journey into full-stack web development,
          building small projects to sharpen my skills. My goal is to grow as a
          developer and create meaningful applications that combine design and
          functionality.
          <br />
          Outside of coding, I have a passion for photography. It started as a
          hobby and is still one of my favorite ways to capture memories.
          <br />
          When I’m not studying or coding, you’ll probably find me playing
          football, strumming the guitar, or enjoying a good anime series.
          <br />
          Thanks for stopping by. Feel free to check out my gallery, explore my
          projects, or just reach out to connect!
        </p>
        <h1 className="text-2xl md:text-3xl font-bold mb-8 mt-10 text-center">
          My Photography
        </h1>
        <Gallery />
      </div>
    </div>
  );
};

export default About;
