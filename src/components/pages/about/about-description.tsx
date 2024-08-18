import Container from '@/components/layout/container';
import SectionName from '@/components/titles/section-name';
import { grotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import AboutCard from './about-card';

const cardsData = [
  {
    title: 'Brand Visibility',
    num: '01',
    text: "By partnering with top-tier influencers and bloggers, we significantly boost your brand's visibility across various social media platforms, reaching a wider and more engaged audience.",
    img: '/images/about/2.png',
  },
];

const AboutDescription = () => {
  return (
    <section className={'bg-ACCENT'}>
      <Container>
        <div className="relative py-[5.20vw]">
          <SectionName className="absolute top-[7.70vw] left-0 !text-BLACK">(about)</SectionName>

          <p className={cn(grotesk.className, 'first-letter:ml-[31.77vw] size64 font-semibold')}>
            HYPR agency is a branding and digital marketing studio from Australia. Partnering with
            companies that need to transform their brand, attract the right audience, and radically
            stand out. We’re a nimble team of designers and creative developers, focused on creating
            uniquely human and culturally informed. Read more
          </p>
        </div>

        <div className="h-[53.33vw] w-full relative">
          <h2 className="absolute text-[10.41vw] bottom-[13vw] text-center left-1/2 -translate-x-1/2">
            our features
          </h2>

          <div className="relative z-[5] flex top-1/2 -translate-y-1/2 justify-center">
            {cardsData.map((item, i) => (
              <AboutCard {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutDescription;
