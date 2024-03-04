import { createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action)=>{
           return action.payload //stater willl be updated with this.
        },
        removeUser: (state, action)=>{
            return null; //stater willl be updated with this.

        }

    }
})
export const { addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;