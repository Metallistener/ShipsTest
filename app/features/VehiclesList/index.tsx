import { useMemo, useState, type FC } from "react";
import { NoData, VehicleItem } from "~/components";
import type { IVehicle } from "~/shared/apollo/types";
import { Filters } from "./ui/Filters";
import type { ISelectOption } from "~/shared/types/common";
import type { ISelectedFilters } from "./types";

interface IVehiclesListProps {
  data: IVehicle[];
  selected: IVehicle;
  onClick: (value: IVehicle) => void;
}

export const VehiclesList: FC<IVehiclesListProps> = (props) => {
  const { data, selected, onClick } = props;
  const [filters, setFilters] = useState<ISelectedFilters>({
    type: null,
    nation: null,
    level: null,
  });
  const filteredData = useMemo(() => {
    let result: IVehicle[] = data;

    if (filters.type)
      result = result.filter((item) => item.type.title === filters.type.value);

    if (filters.nation)
      result = result.filter(
        (item) => item.nation.title === filters.nation.value
      );

    if (filters.level)
      result = result.filter((item) => item.level === filters.level.value);

    return result;
  }, [filters]);

  const onChange = (params: { value: ISelectOption; name: string }) => {
    setFilters((state) => ({ ...state, [params.name]: params.value }));
  };

  return (
    <div className="pt-[24px]">
      <div className="flex items-center justify-between px-[24px]">
        <Filters value={filters} data={data} onChange={onChange} />
        <span>Кол-во: {filteredData.length}</span>
      </div>
      <div className="min-h-[200px] flex items-center gap-[24px] overflow-y-scroll mt-auto p-[24px] pb-[48px]">
        {!filteredData.length && (
          <NoData title="Кораблей соответствующих заданным фильтрам не найдено" />
        )}
        {filteredData.map((vehicle, index) => (
          <VehicleItem
            key={index}
            data={vehicle}
            onClick={onClick}
            isSelected={selected?.id === vehicle.id}
          />
        ))}
      </div>
    </div>
  );
};
