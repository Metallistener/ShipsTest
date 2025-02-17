import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { VehiclesList } from "~/features";
import { VideoBackground } from "./ui";
import { VehicleCard } from "~/features/VehicleCard";
import { useEffect, useMemo, useState } from "react";
import { v4 } from "uuid";
import type { IVehicle, IVehicles } from "~/shared/apollo/types";
import { GET_VEHICLES } from "~/shared/apollo/queries";

export function Vehicles() {
  const { loading: isPending, error, data } = useQuery<IVehicles>(GET_VEHICLES);
  const [selectedVehicle, setSelectedVehicle] = useState<IVehicle>(null);
  const formattedData = useMemo(() => {
    if (data?.vehicles?.length) {
      return data?.vehicles?.map<IVehicle>((item) => ({ ...item, id: v4() }));
    }
    return [];
  }, [data]);

  useEffect(() => {
    if (!selectedVehicle && data?.vehicles?.length) {
      setSelectedVehicle(formattedData[0]);
    }
  }, [formattedData]);

  const onClick = (value: IVehicle) => {
    setSelectedVehicle(value);
  };

  if (isPending) {
    return (
      <main className="flex items-center justify-center">
        <p className="text-white">Vehicles is loading...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex items-center justify-center">
        <p className="text-white">{error.message}</p>
      </main>
    );
  }

  return (
    <main className="flex items-start flex-col">
      <VideoBackground />
      <div className="flex flex-col relative flex-1 w-full overflow-hidden pt-[60px]">
        <VehicleCard data={selectedVehicle} />
        <VehiclesList
          data={formattedData}
          selected={selectedVehicle}
          onClick={onClick}
        />
      </div>
    </main>
  );
}
