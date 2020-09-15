import React, { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { getWeekPlan } from "./../services/trainingService";

interface Props {
  weekId: string;
}

const WorkoutWeek = ({ match, ...props }: RouteComponentProps<Props>) => {
  const [weekPlan] = useState(getWeekPlan(+match.params.weekId));
  return (
    <div>
      <h1>Week {match.params.weekId} plan</h1>
      <ul>
        {weekPlan.map((day, index) => (
          <li key={index}>
            {(!day.includes("Rest") && (
              <Link to={`/day/${match.params.weekId}/${index}`}>{day}</Link>
            )) ||
              day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutWeek;
