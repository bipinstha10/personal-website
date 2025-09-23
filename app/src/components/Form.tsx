import { useForm, type SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      console.log(data);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Failed to send message, try again later.");
    }
  };
  return (
    <form
      className="flex flex-col gap-2 w-80 md:w-100 rounded-3xl shadow-[0_0_20px_2px_rgba(0,0,0,0.2)] p-4 dark:bg-white dark:text-black"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="font-bold" htmlFor="">
        Name
      </label>
      <input
        className="border p-2 rounded-2xl"
        type="text"
        placeholder="Your Name"
        {...register("name", { required: true, maxLength: 30 })}
        aria-invalid={errors.name ? "true" : "false"}
      />
      {errors.name?.type === "required" && (
        <p className="text-red-800 font-bold" role="alert">
          ⚠️ Name is required
        </p>
      )}
      {errors.name?.type === "maxLength" && (
        <p className="text-red-800 font-bold" role="alert">
          ⚠️ Maximum Length is 30
        </p>
      )}
      <label className="font-bold" htmlFor="">
        Email
      </label>
      <input
        className="border p-2 rounded-2xl"
        type="email"
        placeholder="Your Email"
        {...register("email", {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email address",
          },
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email?.type == "required" && (
        <p className="text-red-800 font-bold" role="alert">
          ⚠️ Email is required
        </p>
      )}
      {errors.email?.type == "pattern" && (
        <p className="text-red-800 font-bold" role="alert">
          ⚠️ {errors.email.message}
        </p>
      )}

      <label className="font-bold" htmlFor="">
        Subject
      </label>
      <input
        className="border p-2 rounded-2xl"
        type="text"
        placeholder="Subject"
        {...register("subject", { required: true, maxLength: 30 })}
        aria-invalid={errors.subject ? "true" : "false"}
      />
      {errors.subject?.type == "required" && (
        <p className="text-red-800 font-bold" role="alert">
          ⚠️ Subject is required
        </p>
      )}
      {errors.subject?.type === "maxLength" && (
        <p className="text-red-800 font-bold" role="alert">
          ⚠️ Maximum Length is 30
        </p>
      )}

      <label className="font-bold" htmlFor="">
        Message
      </label>
      <textarea
        className="border p-2 rounded-2xl"
        placeholder="Your Message"
        rows={5}
        {...register("message", { required: true })}
        aria-invalid={errors.message ? "true" : "false"}
      ></textarea>
      {errors.message?.type == "required" && (
        <p className="text-red-800 font-bold" role="alert">
          ⚠️ Message is required
        </p>
      )}

      <input
        className="bg-black text-white p-2 rounded-2xl cursor-pointer hover:bg-gray-800 transition"
        type="submit"
        value="Send Message"
      />
    </form>
  );
};

export default Form;
