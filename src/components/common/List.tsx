import React from "react";

interface Props {
  data: any[];
  textProperty: string;
  valueProperty: string;
}

export const List = ({ data, textProperty, valueProperty, ...props }: Props) => {
  return (
    <ul>
      {data.map((d) => (
        <li key={d[valueProperty]}>{d[textProperty]}</li>
      ))}
    </ul>
  );
};

List.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
