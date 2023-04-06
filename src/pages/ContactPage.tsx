import { forwardRef, useState } from "react";
import { ContactFormData } from "../types";
import { Button } from "../components/common/button";
import { Input } from "../components/common/input";

const ContactPage = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    //onSubmit(formData);
  };

  return (
    <section ref={ref} className="relative mx-auto w-auto max-w-7xl px-4 pt-20">
      <form
        className="mx-auto max-w-lg rounded border bg-gray-100 p-6"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="mb-2 block font-bold text-dark" htmlFor="name">
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-dark" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-dark" htmlFor="message">
            Message
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-dark shadow focus:outline-none"
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-center">
          <Button>Submit</Button>
        </div>
      </form>
    </section>
  );
});

export default ContactPage;
