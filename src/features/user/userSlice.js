import { createSlice } from "@reduxjs/toolkit"

const initState = {
    userName: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        updateName(state, action) {
            state.userName = action.payload;
        }
    }
})

export const { updateName } = userSlice.actions;

export default userSlice.reducer;