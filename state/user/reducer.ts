import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    name: ''
};

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setTgUser(state, { payload: info }) {
            state.id = String(info?.id);
            state.name = info?.name;
        }
    }
});
export default UserSlice.reducer;
