import { HttpResponse, MessageType } from 'shared';
import { StoreHelper } from 'store';

interface IHttpService {
    storeHelper: any;
    apiUrl: string;
    get(url: string): any;
}

export class HttpService implements IHttpService {
    storeHelper: any;
    apiUrl: string;

    constructor() {
        this.storeHelper = new StoreHelper();
        this.apiUrl = process.env.REACT_APP_API_URL as string;
    }

    public async get(url : string): Promise<any> {
        try {
            this.storeHelper.setIsLoading(true);
            const response: HttpResponse = await fetch(`${this.apiUrl}${url}`);
            if (!response.ok) {
                this.storeHelper.pushMessage({id: '', type: MessageType.warning, text: 'page.apiNotFound'});
            }
            return response;
        }
        catch (e: unknown) {
            this.storeHelper.pushMessage({id: '', type: MessageType.danger, text: 'page.apiError'});
        }
        finally {
            this.storeHelper.setIsLoading(false);
        }
    }
}