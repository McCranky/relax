import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import DaysTable from "../components/DaysTable";
import { getWeekPlan } from "./../services/trainingService";

interface Props {
  weekId: string;
}

const WorkoutWeek = ({ match, ...props }: RouteComponentProps<Props>) => {
  const [weekPlan] = useState(getWeekPlan(+match.params.weekId));
  return (
    <div>
      <h2>Week {+match.params.weekId + 1} plan</h2>
      <DaysTable data={weekPlan} weekId={+match.params.weekId} />
    </div>
  );
};

export default WorkoutWeek;
