export interface IVehicles {
  vehicles: IVehicle[];
}

export interface IVehicle {
  __typename: "Vehicle";
  id: string;
  title: string;
  description: string;
  icons: {
    __typename: "IconsVehicle";
    large: string;
    medium: string;
  };
  level: number;
  type: {
    __typename: "VehicleType";
    name: string;
    title: string;
    icons: {
      __typename: "IconsVehicleClass";
      default: string;
    };
  };
  nation: {
    __typename: "Nation";
    name: string;
    title: string;
    color: string;
    icons: {
      __typename: "NationIcons";
      small: string;
      medium: string;
      large: string;
    };
  };
}
