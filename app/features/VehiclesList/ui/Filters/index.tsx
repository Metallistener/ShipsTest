import type { FC } from "react";
import Select, { components } from "react-select";
import type { IVehicle } from "~/shared/apollo/types";
import FlagSvg from "~/assets/svg/flag.svg?react";
import SightSvg from "~/assets/svg/sight.svg?react";
import { VEHICLE_LEVELS } from "~/shared/config";
import type { ISelectOption } from "~/shared/types/common";
import type { ISelectedFilters } from "../../types";
import "./style.scss";

interface IFiltersProps {
  value: ISelectedFilters;
  data: IVehicle[];
  onChange: (params: { value: ISelectOption; name: string }) => void;
}

export const Filters: FC<IFiltersProps> = (props) => {
  const { value, data, onChange } = props;
  const nations = [
    ...new Set(data?.map((item) => item.nation.title) ?? []),
  ].map((nation) => ({ label: nation, value: nation }));
  const types = [...new Set(data?.map((item) => item.type.title) ?? [])].map(
    (type) => ({ label: type, value: type })
  );
  const levels = [...new Set(data?.map((item) => item.level) ?? [])]
    .map((level) => ({
      label: `${VEHICLE_LEVELS[level.toString()]} уровень`,
      value: level,
    }))
    .sort((a, b) => (a.value < b.value ? -1 : 0));

  return (
    <div className="flex items-center gap-[12px]">
      <Select
        placeholder="Нация"
        options={nations}
        classNamePrefix="react-select"
        closeMenuOnSelect
        value={value.nation}
        isClearable
        components={{
          Control: ({ children, ...props }) => (
            <components.Control {...props}>
              <FlagSvg width={24} height={24} /> {children}
            </components.Control>
          ),
        }}
        onChange={(value) => onChange({ value, name: "nation" })}
      />
      <Select
        placeholder="Класс"
        options={types}
        classNamePrefix="react-select"
        closeMenuOnSelect
        value={value.type}
        isClearable
        components={{
          Control: ({ children, ...props }) => (
            <components.Control {...props}>
              <SightSvg width={24} height={24} /> {children}
            </components.Control>
          ),
        }}
        styles={{
          control: (styles) => ({
            ...styles,
            background: "transparent",
            border: "none",
            outline: "none",
          }),
          placeholder: (styles) => ({ ...styles, color: "white" }),
        }}
        onChange={(value) => onChange({ value, name: "type" })}
      />
      <Select
        placeholder="Уровень"
        options={levels}
        classNamePrefix="react-select"
        closeMenuOnSelect
        value={value.level}
        isClearable
        components={{
          Control: ({ children, ...props }) => (
            <components.Control {...props}>
              {props.hasValue ? null : "X"} {children}
            </components.Control>
          ),
          Option: ({ children, ...props }) => (
            <components.Option {...props}>{children}</components.Option>
          ),
        }}
        styles={{
          control: (styles) => ({
            ...styles,
            background: "transparent",
            border: "none",
            outline: "none",
          }),
          placeholder: (styles) => ({ ...styles, color: "white" }),
        }}
        onChange={(value) => onChange({ value, name: "level" })}
      />
    </div>
  );
};
