import { sampleIncrement, sampleChangeOhYeah } from "../_reducers/user.reducer";

export const userAction = {
    incrementSample: (params) => {
        return (dispathcer) => {
            /* DO MAGIC HERE */
            params += 2;
            dispathcer(sampleIncrement(params));
        }
    },

    inputChangeYes: (params) => {
        return (yow_ruel) => {
            let new_data = params + " yow_ruel";

            yow_ruel(sampleChangeOhYeah(new_data));
        }
    }
}