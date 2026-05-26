import React from 'react';
import bannerImage from '../../assets/bannerimg.png';
import trustedBy from '../../assets/trustedby.png';

export default function Banner() {
  return (
    <section
      id="banner"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 70% 50%, #0d2a4a 0%, #071525 40%, #040d17 100%)',
      }}
    >
      <div className="max-w-full mx-auto px-6 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-24">
        <div className="flex-1 max-w-xl z-10">
          <h1 className="text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
            The new foundation of modern banking
          </h1>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            We drive innovation and growth, provide seamless customer experience and operational excellence
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-widest text-sm transition-all duration-200 rounded-[10px]">
              Request Demo
            </button>

            <button className="px-8 py-4 border border-white/40 hover:border-white text-white font-semibold uppercase tracking-widest text-sm transition-all duration-200 rounded-[10px]">
              Contact Us
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end z-10">
          <img
            src={bannerImage}
            alt="Modern banking app dashboard"
            className="w-full max-w-lg lg:max-w-2xl object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mx-auto px-6 lg:px-16 w-full pb-12 z-10">
        <p className="text-gray-500 text-sm mb-5">Trusted By:</p>
        <img
          src={trustedBy}
          alt="Trusted by brands"
          className="w-full max-w-[700px] object-contain opacity-80"
          loading="lazy"
        />
      </div>
    </section>
  );
}