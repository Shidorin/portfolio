import { forwardRef, useEffect, useRef, useState } from "react";
import { ContactForm, ContactFormData } from "../types";
import { Button } from "../components/common/button";
import { Input } from "../components/common/input";
import anime from "animejs";
import ContactInfoCard from "../components/ContactInfoCard/contactInfoCard";
import { contactInfo, contactInfoPL } from "../data/data";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const ContactPage = forwardRef<HTMLDivElement>((props, ref) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [contactInfoData, setContactInfoData] = useState<ContactForm>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFailure, setIsFailure] = useState<boolean>(false);

  const language = useSelector((state: RootState) => state.language);

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

  useEffect(() => {
    if (language.language === "pl") setContactInfoData(contactInfoPL);
    else setContactInfoData(contactInfo);
  }, [language]);

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
    if (formData.email && formData.name && formData.message) {
      // Send form data

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

      try {
        const params = new URLSearchParams();
        params.append("form-name", "contact");
        for (const [key, value] of Object.entries(formData)) {
          params.append(key, value);
        }

        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
        });
        if (response.ok) {
          setIsSuccess(true);
          setIsFailure(false);
          setFormData({
            name: "",
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

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(false);
        setIsFailure(false);
      }, 2000);
    }
  };

  const formTSX = (
    <form
      className="max-w-3xl grow rounded border-2 border-dark p-6 font-mono text-xl opacity-0 lg:ml-auto "
      onSubmit={handleSubmit}
      ref={formRef}
      name="contact"
      method="POST"
    >
      <input type="hidden" name="form-name" value="contact" />
      <Input
        id="name"
        name="name"
        type="text"
        placeholder={contactInfoData?.namePlaceholder}
        value={formData.name}
        onChange={handleChange}
        required={true}
      />

      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required={true}
      />
      <textarea
        className="mb-6 w-full appearance-none rounded border border-dark px-3 py-2 leading-tight text-dark shadow focus:border-primaryText  focus:outline-none"
        id="message"
        name="message"
        placeholder={contactInfoData?.msgPlaceholder}
        value={formData.message}
        rows={9}
        onChange={handleChange}
        required={true}
      />
      <div className="flex justify-center">
        <Button
          submitting={isSubmitting}
          ref={buttonRef}
          isSuccess={isSuccess}
          isFailure={isFailure}
        >
          {contactInfoData?.contactButton}
        </Button>
      </div>
    </form>
  );

  const contactInfoTSX = (
    <div className="mt-4 flex w-full max-w-xl grow flex-col gap-y-8 text-white ">
      <h2 className=" mb-4 text-4xl text-primaryText sm:text-6xl">
        {contactInfoData?.title}
      </h2>
      {contactInfoData?.contact.map((info) => (
        <ContactInfoCard
          key={info.title}
          title={info.title}
          icon={<info.icon className="h-16 w-16" />}
          links={info.links}
        />
      ))}
    </div>
  );

  return (
    <section
      ref={ref}
      className="relative mx-auto flex w-auto max-w-7xl flex-col items-center justify-center gap-x-12 gap-y-8 px-4 py-10 lg:flex-row"
    >
      {contactInfoTSX}
      {formTSX}
    </section>
  );
});

export default ContactPage;
