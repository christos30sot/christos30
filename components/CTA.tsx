import Image from "next/image";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Runner at sunrise"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-75"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-2xl p-8 md:p-0">
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tight mb-6 md:mb-8 leading-tight">
            Ready to cross the finish line with confidence?
          </h2>
          <p className="text-xl opacity-90 mb-10 md:mb-12 leading-relaxed">
            Stop second-guessing your training. Join thousands of ambitious professionals who transformed anxiety into achievement with Run Smart.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="btn btn-primary btn-lg text-base font-semibold shadow-2xl">
              Start Your Free Trial
            </a>
            <a href="#testimonials" className="btn btn-outline btn-lg text-base font-semibold border-2 border-white text-white hover:bg-white hover:text-neutral">
              See Success Stories
            </a>
          </div>

          <p className="text-sm opacity-75 mt-6">
            7-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
