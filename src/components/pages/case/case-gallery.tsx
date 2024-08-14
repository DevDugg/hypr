import Container from '@/components/layout/container';
import CaseTitle from './case-title';
import Image from 'next/image';

const CaseGallery = () => {
  return (
    <section>
      <Container>
        <CaseTitle className="ml-[11.66vw] mb-[2.5vw]" title="gallery" num="(07)" />

        <div className="relative h-[39.68vw]">
          <Image
            src={'/images/case/gallery/1.png'}
            alt={'gallery image'}
            width={524}
            height={350}
            className="absolute top-0 left-0 h-[18.22vw] w-[27.29vw] hover:cursor-grab"
          />

          <Image
            src={'/images/case/gallery/2.png'}
            alt={''}
            width={524}
            height={350}
            className="absolute bottom-0 left-0 h-[18.22vw] w-[27.29vw] z-[4]"
          />
          <Image
            src={'/images/case/gallery/3.png'}
            alt={''}
            width={413}
            height={620}
            className="absolute top-0 left-[24.58vw] z-[3] h-[32.29vw] w-[21.51vw]"
          />
          <Image
            src={'/images/case/gallery/4.png'}
            alt={''}
            width={709}
            height={398}
            className="absolute top-0 right-[14.68vw] z-[3] h-[20.41vw] w-[36.92vw]"
          />
          <Image
            src={'/images/case/gallery/5.png'}
            alt={''}
            width={600}
            height={452}
            className="absolute bottom-0 right-[18.22vw] z-[2] h-[23.54vw] w-[31.25vw]"
          />
          <Image
            src={'/images/case/gallery/6.png'}
            alt={''}
            width={392}
            height={586}
            className="absolute top-0 right-0 z-[1] h-[30.52vw] w-[20.41vw]"
          />
        </div>
      </Container>
    </section>
  );
};

export default CaseGallery;
