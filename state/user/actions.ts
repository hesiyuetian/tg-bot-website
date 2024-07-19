import { createAction } from '@reduxjs/toolkit';

export interface ITgUser {
    id: string;
    name: string;
}

export const setTgUser = createAction<ITgUser>('user/setTgUser');
