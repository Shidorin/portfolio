import { forwardRef, useEffect, useRef, useState } from "react";
import { ContactFormData } from "../types";
import { Button } from "../components/common/button";
import { Input } from "../components/common/input";
import anime from "animejs";

const ContactPage = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState<ContactFormData>({
    title: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFailure, setIsFailure] = useState<boolean>(false);

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
    // setTimeout(() => {
    //   setIsSuccess(true);
    //   setIsFailure(false);
    //   setTimeout(() => {
    //     setIsSubmitting(false);
    //   }, 4000);
    // }, 2000);

    try {
      console.log(JSON.stringify(formData));
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSuccess(true);
        setIsFailure(false);
        setFormData({
          title: "",
          email: "",
          message: "",
        });
      } else {
        setIsSuccess(false);
        setIsFailure(true);
      }
    } catch (error) {
      setIsSuccess(false);
      setIsFailure(true);
    }

    // try {
    //   const response = await fetch("/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: new URLSearchParams(formData).toString(),
    //   })
    //     .then(() => console.log("Form successfully submitted"))
    //     .catch((error) => alert(error));
    // } catch (error) {
    //   setIsSuccess(false);
    //   setIsFailure(true);
    // }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(false);
      setIsFailure(false);
    }, 2000);
  };

  return (
    <section ref={ref} className="relative mx-auto w-auto max-w-7xl px-4 py-20">
      <form
        className="mx-auto max-w-3xl rounded border-2 border-dark p-6 font-mono text-xl opacity-0"
        // onSubmit={handleSubmit}
        ref={formRef}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          // required={true}
        />

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          // required={true}
        />
        <textarea
          className="mb-6 w-full appearance-none rounded border border-dark px-3 py-2 leading-tight text-dark shadow focus:border-primaryText  focus:outline-none"
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          rows={10}
          onChange={handleChange}
          // required
        />
        <div className="flex justify-center">
          <Button
            submitting={isSubmitting}
            ref={buttonRef}
            isSuccess={isSuccess}
            isFailure={isFailure}
          >
            {isSubmitting ? "Sending" : "Contact me"}
          </Button>
        </div>
      </form>
    </section>
  );
});

export default ContactPage;
