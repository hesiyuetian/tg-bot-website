import { useSelector } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import { setTgUser, ITgUser } from './actions';
import { AppState, useAppDispatch } from '../index';
import { Storage } from '@/utils/storage';
import Server from '@/service';
import { $sleep } from '@/utils/utils';
import { message } from 'antd';

export function useLogin(): [{ [key: string]: any }, { login: (info: ITgUser) => void; fetchUser: () => void }] {
    const dispatch = useAppDispatch();
    const id = useSelector<AppState, AppState['user']['id']>((state: AppState) => state.user.id);
    const name = useSelector<AppState, AppState['user']['name']>((state: AppState) => state.user.name);
    const login = useCallback(
        async (info: ITgUser) => {
            dispatch(setTgUser(info));
        },
        [dispatch]
    );

    const fetchUser = () => {};

    return [
        { id, name },
        { login, fetchUser }
    ];
}
