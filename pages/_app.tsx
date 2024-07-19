import 'styles/index.scss';
import 'animate.css';
import { createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app';
import cn from 'classnames';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../state';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useLogin } from '@/state/user/hooks';
import { $sleep } from '@/utils/utils';
import { Storage } from '@/utils/storage';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Button } from 'antd';
import NoticeModal from '@/components/NoticeModal';

const GlobalStyle = createGlobalStyle``;

export async function getServerSideProps(context: any) {
    const { params, query } = context;

    return {
        props: {
            params: params ?? {},
            searchParams: query,
            headers: context.req.headers
        }
    };
}

const ScriptService = ({ children }: any) => {
    const timer: any = useRef(null);
    const router = useRouter();

    const numbers = useRef<number>(0);

    const fetchUrlParams = async () => {
        if (typeof window === 'undefined') return;
        do {
            try {
                const params = new URLSearchParams(window.location.hash.slice(1));
                let initDataRaw: any = params.get('tgWebAppData');
                initDataRaw = initDataRaw ? initDataRaw : Storage.getItem('tguser');
                if (!initDataRaw) {
                    (window as any).Telegram?.WebApp?.close();
                }
                // initDataRaw =
                //     'user=%7B%22id%22%3A2014562265%2C%22first_name%22%3A%22April%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22HeMengEn%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-6950259450119921373&chat_type=sender&auth_date=1706100775&hash=7c3636af717f3e400e967f2ce8d507515c445b4ce015e4bf492e2178df3e6c49';
                // //console.log('fetchUrlParams   initDataRaw:::', numbers.current, initDataRaw);
                (window as any).Telegram?.WebApp?.expand();
                (window as any).Telegram?.WebApp?.enableClosingConfirmation();
                Storage.setItem('tguser', initDataRaw);
                // window.localStorage.setItem('tguser', initDataRaw);

                const initData = new URLSearchParams(initDataRaw);
                const info = initData.get('user');
                if (info) {
                    const { id, name } = JSON.parse(info);
                    numbers.current = 100;
                } else {
                    await $sleep(1000);
                    numbers.current++;
                }
                (window as any).Telegram?.WebApp?.disableVerticalSwipes();
            } catch (e) {
                await $sleep(1500);
                numbers.current++;
            }
        } while (numbers.current < 3);
    };

    useEffect(() => {
        NProgress.configure({ showSpinner: false });
        const handleStart = () => {
            NProgress.start();
        };

        const handleStop = () => {
            NProgress.done();
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);
        router.events.on('routeChangeError', handleStop);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop);
            router.events.off('routeChangeError', handleStop);
        };
    }, [router]);

    useEffect(() => {
        fetchUrlParams();
        return () => {
            clearInterval(timer.current);
            timer.current = null;
        };
    }, []);
    return <>{children}</>;
};
function AiApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/logo2.ico" />
                <title>SI-DEV Bot</title>
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="msapplication-tap-highlight" content="no" />
            </Head>
            <GlobalStyle />

            <Provider store={store}>
                {/* <Header headers={pageProps.headers} /> */}
                <Main id="_main">
                    <ScriptService>
                        <Component {...pageProps} />
                    </ScriptService>
                </Main>
                {/* <Footer /> */}
            </Provider>
        </>
    );
}

const Main = styled.section`
    max-width: 450px;
    height: 100%;
    min-height: 100%;
    overflow-y: auto;
    margin: 0 auto;
    position: relative;
    overflow-x: hidden;
`;

export default AiApp;
