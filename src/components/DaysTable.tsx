import React from "react";
import {
  Table,
  Row,
  CellPositive,
  CellNegative,
  LinkData,
} from "./common/styles/Table.styled";

interface Props {
  data: string[];
  weekId: number;
}

const DaysTable = ({ data, weekId, ...props }: Props) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <td>Day</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <Row key={index}>
              <td>{index + 1}</td>
              {(!d.toLowerCase().includes("rest") && (
                <CellPositive>
                  <LinkData to={`/day/${weekId}/${index}`}>{d}</LinkData>
                </CellPositive>
              )) || <CellNegative>{d}</CellNegative>}
            </Row>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DaysTable;
