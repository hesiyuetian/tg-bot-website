import { createAction } from '@reduxjs/toolkit';

export const setNoticeModal = createAction<BaseReduxType.noticeInfo>('base/setNoticeModal');
export const setShowConfirmModal = createAction<BaseReduxType.confirmInfo>('base/setShowConfirmModal');
