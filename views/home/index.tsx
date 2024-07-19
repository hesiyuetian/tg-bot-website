import { FC, ReactElement, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { useRouter } from 'next/router';
import Server from '@/service';
import { useLogin } from '@/state/user/hooks';
import { Button, Modal, message } from 'antd';

const Home: FC = (): ReactElement => {
    const [userInfo] = useLogin();
    const router = useRouter();

    return (
        <View>
            <h4>test-bot</h4>
            <h4>test-bot</h4>
            <h4>test-bot</h4>
            <h4>test-bot</h4>
            <h4>test-bot</h4>
            <h4>test-bot</h4>
        </View>
    );
};

const View = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

export default Home;
