import type { FC } from "react";
import type { IVehicle } from "~/shared/apollo/types";
import cls from "./style.module.scss";
import { clsx } from "~/shared/lib/clsx";

interface IVehicleItemProps {
  data: IVehicle;
  isSelected: boolean;
  onClick: (id: IVehicle) => void;
}

export const VehicleItem: FC<IVehicleItemProps> = (props) => {
  const { data, isSelected, onClick } = props;
  return (
    <button
      type="button"
      onClick={() => onClick(data)}
      data-is-selected={isSelected}
      className={clsx(
        "relative h-[200px] min-w-[300px] border-[1px] border-gray-800 bg-black/20",
        cls.button,
        { "bg-white/20": isSelected }
      )}
    >
      <img
        alt={data?.title}
        src={data?.icons?.medium}
        className="object-cover h-full"
      />
    </button>
  );
};
