import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    noticeInfo: {
        open: false,
        info: {
            title: '',
            describe: ''
        }
    } as BaseReduxType.noticeInfo,

    confirmInfo: {
        open: false,
        info: {
            title: '',
            describe: ''
        }
    } as BaseReduxType.noticeInfo
};

const BaseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        setNoticeModal(state, { payload: data }) {
            state.noticeInfo = data;
        },
        setShowConfirmModal(state, { payload: data }) {
            state.confirmInfo = data;
        }
    }
});
export default BaseSlice.reducer;
