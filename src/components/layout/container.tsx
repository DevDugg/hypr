import { PropsWithChildren } from "react";
import clsx from "clsx";
import { ui } from "@/config/ui";

interface IProps extends PropsWithChildren {
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return (
    <div className={clsx(`px-5 xl:px-[60px]`)}>
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
