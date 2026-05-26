import React from 'react';
import happeningImage1 from '../../assets/happeningimage1.png';

const articles = [
  {
    id: 1,
    category: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
    image: happeningImage1,
    featured: true,
  },
  {
    id: 2,
    category: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
    featured: false,
  },
  {
    id: 3,
    category: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
    featured: false,
  },
];

function ReadButton() {
  return (
    <button className="mt-8 w-full rounded-[8px] border border-white/35 px-6 py-4 font-chivo text-[12px] font-medium uppercase tracking-normal text-white/60 transition duration-300 hover:border-white/60 hover:text-white">
      READ MORE
    </button>
  );
}

function MetaInfo({ author, date }) {
  return (
    <div className="mt-6 flex items-center gap-6 font-archivo text-[16px] font-normal text-[#6C94A8]">
      <span>{author}</span>
      <span>{date}</span>
    </div>
  );
}

function SmallCard({ article }) {
  return (
    <article className="flex min-h-[430px] flex-col justify-between rounded-[8px] bg-[#03141B] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
      <div>
        <p className="font-chivo text-[12px] font-medium uppercase tracking-[0.08em] text-[#3E89AA]">
          {article.category}
        </p>

        <h3 className="mt-6 max-w-[280px] font-archivo text-[27px] font-normal leading-[1.2] text-[#E9F4F9]">
          {article.title}
        </h3>

        <MetaInfo author={article.author} date={article.date} />
      </div>

      <ReadButton />
    </article>
  );
}

function FeaturedCard({ article }) {
  return (
    <article className="grid overflow-hidden rounded-[8px] bg-[#03141B] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] lg:grid-cols-[0.98fr_1.02fr]">
      <div className="p-6 sm:p-8">
        <div className="h-full w-full rounded-[8px] bg-[#102056] p-4 sm:p-6">
          <img
            src={article.image}
            alt="Featured fintech insight"
            className="h-full w-full rounded-[8px] object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between p-8 sm:p-10">
        <div>
          <p className="font-chivo text-[12px] font-medium uppercase tracking-[0.08em] text-[#3E89AA]">
            {article.category}
          </p>

          <h3 className="mt-6 max-w-[380px] font-archivo text-[27px] font-normal leading-[1.2] text-[#E9F4F9]">
            {article.title}
          </h3>

          <MetaInfo author={article.author} date={article.date} />
        </div>

        <ReadButton />
      </div>
    </article>
  );
}

export default function Happening() {
  return (
    <section
      id="happening"
      className="overflow-hidden py-20 lg:py-24"
      style={{
        background: `
          radial-gradient(circle at 22% 52%, rgba(7,25,60,0.55) 0%, rgba(4,18,27,0.96) 30%, rgba(2,12,18,1) 62%),
          linear-gradient(180deg, #020B12 0%, #020B12 100%)
        `,
      }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-6 lg:grid-cols-[360px_1fr] lg:gap-20 lg:px-16">
        <div className="flex flex-col justify-start pt-2">
          <h2 className="max-w-[330px] font-archivo text-[37px] font-normal leading-[1.2] tracking-[-0.01em] text-[#E9F4F9]">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>

          <button className="mt-14 w-fit min-w-[260px] rounded-[8px] border border-white/80 px-8 py-4 font-chivo text-[12px] font-medium uppercase tracking-normal text-white transition duration-300 hover:bg-white hover:text-[#01141B]">
            INSIGHTS
          </button>
        </div>

        <div className="space-y-8">
          <FeaturedCard article={articles[0]} />

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            <SmallCard article={articles[1]} />
            <SmallCard article={articles[2]} />
          </div>

          <div className="flex justify-end">
            <a
              href="#"
              className="group inline-flex items-center gap-2 font-chivo text-[14px] font-medium uppercase tracking-[-0.01em] text-[#2490BB]"
            >
              <span className="relative pb-1">
                READ ALL INSIGHTS
                <span className="absolute bottom-0 left-0 h-px w-10 bg-[#2490BB] transition-all duration-300 group-hover:w-full" />
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}