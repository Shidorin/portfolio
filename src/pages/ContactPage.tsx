import { forwardRef } from "react";

const ContactPage = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="relative mx-auto min-h-screen w-auto max-w-7xl px-4 pt-20"
    >
      <div>Contact Page</div>
    </section>
  );
});

export default ContactPage;
