import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-16 lg:py-24">
      <div className="flex flex-col gap-8 lg:gap-10 items-center justify-center text-center lg:text-left lg:items-start lg:w-1/2">
        <h1 className="font-heading font-extrabold text-5xl lg:text-6xl tracking-tight text-neutral leading-tight">
          Run Farther. <span className="text-primary">Recover Faster.</span> <span className="text-secondary">Fuel Smarter.</span>
        </h1>
        <p className="text-lg lg:text-xl text-neutral/80 leading-relaxed max-w-xl">
          The all-in-one training and nutrition app designed for ambitious professionals.
          Stop guessing. Start optimizing. Crush your PR without burnout.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#pricing"
            className="btn btn-primary btn-lg text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Start Free Today
          </a>
          <a
            href="#features"
            className="btn btn-outline btn-lg text-base font-semibold"
          >
            See How It Works
          </a>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <TestimonialsAvatars priority={true} />
          <div className="flex items-center gap-6 text-sm text-neutral/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>7-day free trial</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <Image
          src="https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Professional runner training with data-driven approach"
          className="w-full rounded-2xl shadow-2xl"
          priority={true}
          width={600}
          height={600}
        />
      </div>
    </section>
  );
};

export default Hero;
