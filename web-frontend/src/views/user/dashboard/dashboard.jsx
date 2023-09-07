import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../../_actions/user.action";
import { useState } from "react";

function Dashboard(props) {
    const dispatch = useDispatch();
    const { user: { value, name, sample_array, sample_input } } = useSelector((state) => state);
    const [google_form, submitGoogleForm] = useState(sample_array);
    const [sample_inwow, sampleInWow] = useState();

    const increment = () => {
        dispatch(userAction.incrementSample(1));
    }

    const changeData = () => {
        let sample_array = [
            {
              name: "Helklo"
            },
            {
              name: "Stasdasan"
            }
        ];

        submitGoogleForm(sample_array);
    }

    const google_form_array = () => {
        let sample_object = google_form.map((item, index) => (
                                <li key={ index }>{ item.name }</li>
                            ));


        return sample_object;
    }

    const sampleChange = (event) => {
        sampleInWow(event.target.value);
    }
    
    const submitShot = () => {
        dispatch(userAction.inputChangeYes(sample_inwow));
    }

    return (
        <div>
            <h1>{ value }, { name }</h1>

            <ul>
                { google_form_array() }
            </ul>
            <button id="sampleIncrement" onClick={ increment }>Click Me</button>
            <button id="change" onClick={ changeData }>asdasd Me</button>

            <h2>INPUT</h2>
            <p>{ sample_input || "No Data Yet" }</p>
            <input type="text" name="sample_input" id="sample_input" onChange={ sampleChange } />
            <button onClick={ submitShot }>SAMPLE</button>
        </div>
    );
}

export default Dashboard;