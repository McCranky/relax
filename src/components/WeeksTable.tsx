import React from "react";
import { Table, Row, CellPositive, LinkData } from "./common/styles/Table.styled";

interface Props {
  data: string[];
}

const WeeksTable = ({ data, ...props }: Props) => {
  return (
    <>
      <Table>
        <tbody>
          {data.map((d, index) => (
            <Row key={index}>
              <CellPositive>
                <LinkData to={`/week/${index}`}>{d}</LinkData>
              </CellPositive>
            </Row>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default WeeksTable;
