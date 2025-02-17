import type { FC } from "react";
import { clsx } from "~/shared/lib/clsx";

interface INoDataProps {
  className?: string;
  title?: string;
}

export const NoData: FC<INoDataProps> = (props) => {
  const { title = "Нет данных", className } = props;
  return (
    <div className={clsx("flex-1 flex items-center justify-center", className)}>
      <p className="text-gray-400">{title}</p>
    </div>
  );
};
