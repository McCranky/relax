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
      <h2>No Wquipment Home Beginner Program</h2>
      <WeeksTable data={planWeeks} />
    </>
  );
};

export default WorkoutPlan;
