import type { FC } from "react";
import type { IVehicle } from "~/shared/apollo/types";
import cls from "./style.module.scss";
import { clsx } from "~/shared/lib/clsx";
import { VEHICLE_LEVELS } from "~/shared/config";

interface IVehicleCardProps {
  data: IVehicle;
}

export const VehicleCard: FC<IVehicleCardProps> = (props) => {
  const { data } = props;
  return (
    <div className="flex-1 flex gap-[24px] px-[24px] pt-[24px]">
      <div className="max-w-[50%] flex-1 flex items-center justify-center">
        <img
          key={data?.id}
          alt={data?.title}
          src={data?.icons?.large}
          className={clsx("object-contain", cls.img)}
        />
      </div>
      <div className="max-w-[50%] gap-[24px] flex-1 backdrop-blur-xs bg-white/5 flex flex-col p-[24px]">
        <div>
          <span className="text-sm text-gray-400">Название</span>
          <h1 className="text-3xl font-bold">
            {data?.title?.trim() || "Без названия"}
          </h1>
        </div>
        <div className="flex items-start gap-[24px]">
          <div>
            <span className="text-sm text-gray-400">Уровень</span>
            <h1 className="text-2xl font-bold">
              {VEHICLE_LEVELS[data?.level.toString()]}
            </h1>
          </div>
          <div>
            <span className="text-sm text-gray-400">Класс</span>
            <h1 className="text-2xl font-bold">{data?.type?.title}</h1>
          </div>
          <div>
            <span className="text-sm text-gray-400">Нация</span>
            <h1 className="text-2xl font-bold">{data?.nation?.title}</h1>
          </div>
        </div>
        <div>
          <span className="text-sm text-gray-400">Описание</span>
          <p className="text-md">{data?.description}</p>
        </div>
      </div>
    </div>
  );
};
