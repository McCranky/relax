import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getPlanWeeks } from "../services/trainingService";
import "../App.scss";
import WeeksTable from "../components/WeeksTable";
interface Props {
  planId: string;
}

const WorkoutPlan = ({ match, ...props }: RouteComponentProps<Props>) => {
  const [planWeeks] = useState(getPlanWeeks(+match.params.planId));

  return (
    <>
      {match.params.planId === "0" && <h2>No Wquipment Home Beginner Program</h2>}
      {match.params.planId !== "0" && <h2>Beginner Program</h2>}
      <WeeksTable planId={+match.params.planId} data={planWeeks} />
    </>
  );
};

export default WorkoutPlan;
