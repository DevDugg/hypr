import Image from "next/image";
import { workData } from "@/database/work.data";

const WorkHero = () => {
  return (
    <section>
      <h1 className="size360 text-ACCENT">our work</h1>

      <div className="grid grid-cols-3">
        {workData.map((item, i) => (
          <div key={i}>{/* <Image src={item.img} alt={'image'} /> */}</div>
        ))}
      </div>
    </section>
  );
};

export default WorkHero;
