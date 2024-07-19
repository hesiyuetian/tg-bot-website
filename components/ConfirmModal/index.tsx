import { useConfirmModal } from '@/state/base/hooks';
import { Button, Modal } from 'antd';
import { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';

type IProps = {
    loading?: boolean;
    onOk: () => void;
};
const Confirm: FC<IProps> = ({ onOk, loading = false }): ReactElement => {
    const [{ open, info }, handConfirmModal] = useConfirmModal();
    return (
        <View width="80%" footer={null} open={open} onOk={() => handConfirmModal({ open: true })} onCancel={() => handConfirmModal({ open: false })}>
            <ConfirmContent>
                <h5>{info!.title}</h5>
                {info!.describe}
            </ConfirmContent>
            <ConfirmBtns>
                <Btn onClick={() => handConfirmModal({ open: false })}>cancel</Btn>
                <Btn loading={loading} onClick={() => onOk()}>
                    confirm
                </Btn>
            </ConfirmBtns>
        </View>
    );
};

const View = styled(Modal)`
    .ant-modal-content {
        background: none;
        position: relative;
        padding-bottom: 0.7rem;
    }
`;
const ConfirmContent = styled.div`
    border-radius: 0.12rem;
    border: 2px solid #565f4e;
    background: #e7dec1;
    padding: 0.12rem 0.14rem;
    color: #555e4b;
    font-size: 0.16rem;
    line-height: 1.4;
    position: relative;
    z-index: 3;
    h5 {
        font-size: 0.2rem;
    }
    &.gift_content {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 0.32rem;
        padding-top: 0.28rem;
        p {
            text-align: center;
            margin-bottom: 0.2rem;
        }
        img {
            width: 0.6rem;
            height: 0.6rem;
            border: 2px solid rgb(133, 59, 15);
            border-radius: 8px;
        }
    }
`;

const ConfirmBtns = styled.div`
    border: 2px solid #565f4e;
    background: #9c7b58;
    height: 0.78rem;
    display: flex;
    align-items: center;
    padding: 0.25rem;
    border-radius: 0 0 0.12rem 0.12rem;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    &.onok {
        justify-content: center;
    }
`;
const Btn = styled(Button)`
    flex: 1;
    border-radius: 8px;
    height: 0.36rem;
    line-height: 0.32rem;
    border: 2px solid #ebc874 !important;
    text-align: center;
    color: #ebc874 !important;
    font-size: 0.2rem;
    margin-right: 0.12rem;
    cursor: pointer;
    &:last-child {
        border-color: #555e4b !important;
        background-color: #ebc874 !important;
        background-image: url('/images/shop/mylist-nav-bg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        color: #555e4b !important;
        margin-right: 0;
    }
`;

export default Confirm;
