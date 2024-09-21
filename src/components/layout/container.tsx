import { PropsWithChildren } from "react";
import clsx from "clsx";

interface IProps extends PropsWithChildren {
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return (
    <div className={clsx(`pl-[3.58vw] pr-[calc(3.58vw + 20px)] sm:px-[3.1vw]`)}>
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
