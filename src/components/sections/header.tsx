import Container from '../layout/container';

export const Header = () => {
  return (
    <Container className="">
      <header className="pt-6 pb-10 flex items-center justify-between text-WHITE">
        <div className="uppercase text-[40px] leading-none">HYPR</div>

        <div className="size-6 flex flex-col justify-center items-center gap-1 cursor-pointer">
          <div className="w-[18px] h-0.5 bg-WHITE"></div>
          <div className="w-[18px] h-0.5 bg-WHITE"></div>
        </div>
      </header>
    </Container>
  );
};
