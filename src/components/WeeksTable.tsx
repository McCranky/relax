import React from "react";
import { Table, Row, CellPositive, LinkData } from "./common/styles/Table.styled";

interface Props {
  data: string[];
  planId: number;
}

const WeeksTable = ({ data, planId, ...props }: Props) => {
  return (
    <>
      <Table>
        <tbody>
          {data.map((d, weekId) => (
            <Row key={weekId}>
              <CellPositive>
                <LinkData to={`/week/${planId}${weekId}`}>{d}</LinkData>
              </CellPositive>
            </Row>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default WeeksTable;
