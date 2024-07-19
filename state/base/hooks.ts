import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { setNoticeModal, setShowConfirmModal } from './actions';
import { AppState, useAppDispatch } from '../index';

export function useNoticeModal(): [BaseReduxType.noticeInfo, (data: BaseReduxType.noticeInfo) => void] {
    const dispatch = useAppDispatch();
    const noticeInfo = useSelector<AppState, AppState['base']['noticeInfo']>((state: AppState) => state.base.noticeInfo);
    const handNoticeModal = useCallback(
        (data: BaseReduxType.noticeInfo) => {
            dispatch(setNoticeModal(data));
        },
        [dispatch]
    );

    return [noticeInfo, handNoticeModal];
}

export function useConfirmModal(): [BaseReduxType.confirmInfo, (data: BaseReduxType.confirmInfo) => void] {
    const dispatch = useAppDispatch();
    const confirmInfo = useSelector<AppState, AppState['base']['confirmInfo']>((state: AppState) => state.base.confirmInfo);
    const handConfirmModal = useCallback(
        (data: BaseReduxType.confirmInfo) => {
            dispatch(setShowConfirmModal(data));
        },
        [dispatch]
    );

    return [confirmInfo, handConfirmModal];
}
