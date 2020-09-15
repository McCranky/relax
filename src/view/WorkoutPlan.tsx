import React, { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { getPlanWeeks } from "../services/trainingService";
import "../App.scss";
interface Props {
  planId: string;
}

const WorkoutPlan = ({ match, ...props }: RouteComponentProps<Props>) => {
  const [planWeeks] = useState(getPlanWeeks(+match.params.planId));
  return (
    <React.Fragment>
      <h1>No Wquipment Home Beginner Program</h1>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {planWeeks.map((week, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/week/${index}`}>{week}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul>
        {planWeeks.map((week, index) => (
          <li key={index}>
            <Link to={`/week/${index}`}>{week}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default WorkoutPlan;
