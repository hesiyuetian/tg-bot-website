declare namespace BaseReduxType {
    type noticeInfo = {
        open: boolean;
        info?: {
            title: '';
            describe: '';
        };
    };
    type confirmInfo = noticeInfo;
}
