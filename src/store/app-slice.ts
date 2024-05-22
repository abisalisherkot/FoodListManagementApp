import { createSlice } from "@reduxjs/toolkit";

type AppSlice = {
    isloading: boolean,
    loadingArray: string[],
}
const initialState: AppSlice = {
    isloading: false,
    loadingArray: [],
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.isloading = true;
            state.loadingArray = [...state.loadingArray, action.payload];
        },
        stopLoading(state, action) {
            const filetered = state.loadingArray?.filter(
                (item) => item !== action.payload
            );
            state.loadingArray = filetered;
            if (state.loadingArray.length === 0) {
                state.isloading = false;
            }
        },
    },
});

export const { setLoading, stopLoading } = appSlice.actions;

export default appSlice;

