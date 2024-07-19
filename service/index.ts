import service from './axios';
class Server {
    static meta = {
        baseUrl: 'https://back.frog.travel',
        baseFrogUrl: 'https://frog.frog.travel',
        baseMarketUrl: 'https://market.frog.travel',
        baseActivityUrl: 'https://activity.frog.travel'
    };

    static login = async (params: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.get(`${this.meta.baseUrl}/userinfo/userdata`, { params }, _options);
    };
    static bindTonAddress = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseUrl}/userinfo/tonbund`, data, _options);
    };

    static harvest = async (userid: string, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseUrl}/userinfo/harvest`, { userid }, _options);
    };

    static frogcoin_transfer = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseUrl}/userinfo/frogcoin_transfer`, data, _options);
    };

    static setautoharves = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseUrl}/userinfo/setautoharves`, data, _options);
    };

    static frogdata = async (userid: string, _options: Record<string, any> = {}): Promise<any> => {
        return await service.get(`${this.meta.baseFrogUrl}/froginfo/frogdata`, { params: { userid } }, _options);
    };

    // 得到market和mylist信息
    static marketdata = async (params: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.get(`${this.meta.baseMarketUrl}/marketinfo/marketdata`, { params }, _options);
    };

    // 得到shop中商品信息
    static shopitems = async (userid: string, _options: Record<string, any> = {}): Promise<any> => {
        return await service.get(`${this.meta.baseMarketUrl}/shopinfo/shopitems`, { params: { userid } }, _options);
    };

    // shop购买固定价格商品
    static shopBuy = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseMarketUrl}/shopinfo/buy`, data, _options);
    };

    // 开宝箱
    static useprops = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseUrl}/baginfo/useprops`, data, _options);
    };
    static usegiftcode = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseUrl}/baginfo/usegiftcode`, data, _options);
    };

    static frogready = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseFrogUrl}/froginfo/frogready`, data, _options);
    };
    static cancelready = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseFrogUrl}/froginfo/cancelready`, data, _options);
    };
    static emergencyrecall = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseFrogUrl}/froginfo/emergencyrecall`, data, _options);
    };

    static newlist = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseMarketUrl}/marketinfo/newlist`, data, _options);
    };
    static unlist = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseMarketUrl}/marketinfo/unlist`, data, _options);
    };
    static edititem = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseMarketUrl}/marketinfo/edititem`, data, _options);
    };
    static marketbuy = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseMarketUrl}/marketinfo/marketbuy`, data, _options);
    };
    static setfrogmsg = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseFrogUrl}/froginfo/setfrogmsg`, data, _options);
    };
    static gift = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseUrl}/baginfo/useprops`, data, _options);
    };
    static claimkey = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseUrl}/userinfo/claimkey`, data, _options);
    };
    static swaptokey = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseUrl}/userinfo/swaptokey`, data, _options);
    };
    static claimfrog = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseFrogUrl}/froginfo/claimfrog`, data, _options);
    };
    static paytonmsg = async (params: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.get(`${this.meta.baseUrl}/userinfo/paytonmsg`, { params }, _options);
    };
    static paystarmsg = async (params: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.get(`${this.meta.baseUrl}/userinfo/paystarmsg`, { params }, _options);
    };
    // static task = async (params: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
    //     return await service.get(`${this.meta.baseUrl}/userinfo/checktask`, { params }, _options);
    // };
    static task = async (params: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.get(`${this.meta.baseActivityUrl}/activityinfo/checktask`, { params }, _options);
    };
    static claimbggift = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseActivityUrl}/activityinfo/claimbggift`, data, _options);
    };
    static swapcer = async (data: Record<string, any> = {}, _options: Record<string, any> = {}): Promise<any> => {
        return await service.post(`${this.meta.baseActivityUrl}/activityinfo/swapcer`, data, _options);
    };
}

export default Server;
