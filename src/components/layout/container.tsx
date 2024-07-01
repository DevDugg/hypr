import { PropsWithChildren } from "react";
import clsx from "clsx";
import { ui } from "@/config/ui";

interface IProps extends PropsWithChildren {
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return (
    <div
      className={clsx(
        `container max-width-[${ui.container.maxWidth}] max-lg:px-5 max-md:px`,
        ui.container.overflowHidden && "overflow-hidden",
      )}
    >
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
