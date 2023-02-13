import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../_actions/user.action";

function Dashboard(props) {
    const dispatch = useDispatch();
    const { user: { value } } = useSelector((state) => state);

    const increment = () => {
        dispatch(userAction.incrementSample(1));
    }

    return (
        <div>
            <h1>{ value }</h1>
            <button id="sampleIncrement" onClick={ increment }>Click Me</button>
        </div>
    );
}

export default Dashboard;