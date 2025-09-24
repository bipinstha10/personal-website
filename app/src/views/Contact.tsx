import Form from "../components/Form";
import SocialBtn from "../components/SocialBtn";

const Contact = () => {
  return (
    <div className="flex-1 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 mt-10 text-center">
        I’d Love to Hear from You
      </h1>
      <div>
        <Form />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold mb-8 mt-20 text-center">
        Let's Connect
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SocialBtn
          destination="https://github.com/bipinstha10"
          icon="/logos/github.png"
        />
        <SocialBtn
          destination="https://www.linkedin.com/in/prem-shrestha-075707355/"
          icon="/logos/linkedin.png"
        />
        <SocialBtn
          destination="https://www.facebook.com/bipin.shrestha.737001"
          icon="/logos/facebook.png"
        />
        <SocialBtn
          destination="https://www.instagram.com/bits.of.bipin/"
          icon="/logos/instagram.png"
        />
      </div>
    </div>
  );
};

export default Contact;
