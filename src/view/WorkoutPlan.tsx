import React, { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { getPlanWeeks } from "../services/trainingService";

interface Props {
  planId: string;
}

const WorkoutPlan = ({ match, ...props }: RouteComponentProps<Props>) => {
  const [planWeeks] = useState(getPlanWeeks(+match.params.planId));
  return (
    <div>
      <h1>No Wquipment Home Beginner Program</h1>
      <ul>
        {planWeeks.map((week, index) => (
          <li key={index}>
            <Link to={`/week/${index}`}>{week}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutPlan;
