import { forwardRef, useEffect, useRef, useState } from "react";
import { ContactFormData } from "../types";
import { Button } from "../components/common/button";
import { Input } from "../components/common/input";
import anime from "animejs";

const ContactPage = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  /* animate sliding in */
  useEffect(() => {
    const element = formRef.current;
    if (element) {
      const handleScroll = () => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.8) {
          anime({
            targets: element,
            translateY: ["100px", "0px"],
            opacity: [0, 1],
            easing: "easeOutCubic",
            duration: 1000,
          });
          window.removeEventListener("scroll", handleScroll);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [formRef]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // animate button
    if (buttonRef.current) {
      await anime({
        targets: buttonRef.current,
        translateY: ["0", "-10px"],
        opacity: [1, 0],
        duration: 3500,
        easing: "easeInOutQuad",
      }).finished;
    }

    console.log(formData);
  };


  return (
    <section ref={ref} className="relative mx-auto w-auto max-w-7xl px-4 py-20">
      <form
        className="mx-auto max-w-3xl rounded border-2 border-dark p-6 font-mono text-xl opacity-0"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className="mb-6">
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            // required={true}
          />
        </div>
        <div className="mb-6">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            // required={true}
          />
        </div>
        <div className="mb-6">
          <textarea
            className="w-full appearance-none rounded border border-dark px-3 py-2 leading-tight text-dark shadow focus:border-primaryText focus:outline-none"
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            rows={10}
            onChange={handleChange}
            // required
          />
        </div>
        <div className="flex justify-center">
          <Button submitting={isSubmitting} ref={buttonRef}>
            {isSubmitting ? "Sending" : "Contact me"}
          </Button>
        </div>
      </form>
    </section>
  );
});

export default ContactPage;
