import { sampleIncrement } from "../_reducers/user.reducer";

export const userAction = {
    incrementSample: (params) => {
        return (dispathcer) => {
            dispathcer(sampleIncrement(params));
        }
    }
}