import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getPlanWeeks } from "../services/trainingService";
import "../App.scss";
import WeeksTable from "../components/WeeksTable";
import { Button } from "../components/common/styles/Button.styled";
interface Props {
  planId: string;
}

const WorkoutPlan = ({ match, ...props }: RouteComponentProps<Props>) => {
  const [palnId, setPalnId] = useState(0);
  const [planWeeks, setPlanWeeks] = useState(getPlanWeeks(palnId));

  useEffect(() => {
    setPlanWeeks(getPlanWeeks(palnId));
  }, [palnId]);

  return (
    <>
      {palnId === 0 && <h2>No Wquipment Home Beginner Program</h2>}
      {palnId !== 0 && <h2>Beginner Program</h2>}
      <WeeksTable planId={palnId} data={planWeeks} />
      <Button onClick={() => setPalnId((old) => (old + 1) % 2)}>Next program</Button>
    </>
  );
};

export default WorkoutPlan;
