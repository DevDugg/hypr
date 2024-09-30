import { PropsWithChildren } from "react";
import clsx from "clsx";

interface IProps extends PropsWithChildren {
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return (
    <div className={clsx(`px-[3.58vw] sm:px-[3.1vw] mx-auto w-full`)}>
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
