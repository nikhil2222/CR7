import React from 'react';
import n7Icon from '../../assets/N7.png';
import starIcon from '../../assets/star.png';
import handIcon from '../../assets/hand.png';
import cb7Icon from '../../assets/CB7.png';

const items = [
  { type: 'icon', src: starIcon, alt: 'star', width: 38, height: 38 },
  { type: 'icon', src: n7Icon, alt: 'N7', width: 94, height: 44 },
  { type: 'icon', src: starIcon, alt: 'star', width: 38, height: 38 },
  { type: 'text', text: 'Say', className: 'text-[#0A0A0A]' },
  { type: 'icon', src: handIcon, alt: 'hand', width: 42, height: 42 },
  { type: 'text', text: 'to the new way of banking', className: 'text-[#0A0A0A]' },
  { type: 'icon', src: starIcon, alt: 'star', width: 38, height: 38 },
  { type: 'icon', src: cb7Icon, alt: 'CB7', width: 104, height: 44 },
  { type: 'icon', src: starIcon, alt: 'star', width: 38, height: 38 },
  { type: 'text', text: 'Say', className: 'text-[#0A0A0A]' },
  { type: 'icon', src: handIcon, alt: 'hand', width: 42, height: 42 },
  { type: 'text', text: 'to the new way of banking', className: 'text-[#0A0A0A]' },
];

/** @param {string} keyPrefix */
const renderItems = (keyPrefix) =>
  items.map((item, index) => {
    if (item.type === 'icon') {
      return (
        <span
          key={`${keyPrefix}-${index}`}
          className="inline-flex shrink-0 items-center justify-center"
        >
          <img
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="block object-contain"
            loading="lazy"
          />
        </span>
      );
    }

    return (
      <span
        key={`${keyPrefix}-${index}`}
        className={`inline-flex shrink-0 items-center font-chivo text-[47px] font-semibold leading-none ${item.className}`}
      >
        {item.text}
      </span>
    );
  });

const Carosal = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-5">
      <div className="relative flex overflow-hidden whitespace-nowrap">
        <div className="marquee-track flex min-w-max items-center gap-9 pr-9">
          {renderItems('first')}
        </div>

        <div
          className="marquee-track flex min-w-max items-center gap-9 pr-9"
          aria-hidden="true"
        >
          {renderItems('second')}
        </div>
      </div>

      <style>
        {`
          .marquee-track {
            animation: marqueeMove 24s linear infinite;
          }

          @keyframes marqueeMove {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Carosal;