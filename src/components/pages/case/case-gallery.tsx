import Container from '@/components/layout/container';
import CaseTitle from './case-title';

const CaseGallery = () => {
  return (
    <section>
      <Container>
        <CaseTitle className="ml-[11.66vw] mb-[2.5vw]" title="gallery" num="(07)" />

        <div className="flex">
          <div className="flex flex-col gap-[3.12vw]">
            <img src="/images/case/gallery/1.png" />
            <img src="/images/case/gallery/2.png" className="relative z-10" />
          </div>

          <img
            src="/images/case/gallery/3.png"
            className="-translate-x-[2.70vw] h-[32.29vw] relative z-[5]"
          />

          <div className="flex flex-col">
            <img
              src="/images/case/gallery/4.png"
              alt=""
              className="-translate-x-[7.43vw] relative z-10"
            />
            <img
              src="/images/case/gallery/5.png"
              alt=""
              className="-translate-x-[5.25vw] relative -translate-y-[4.58vw] w-[31.25vw] -z-[5]"
            />
          </div>

          <img
            src="/images/case/gallery/6.png"
            alt=""
            className="h-[30.52vw] -translate-x-[15vw]"
          />
        </div>
      </Container>
    </section>
  );
};

export default CaseGallery;
