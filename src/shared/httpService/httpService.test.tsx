import { HttpService } from './httpService';
import fetchMock from 'jest-fetch-mock';
import fetch from 'jest-fetch-mock';

describe('HttpService', () => {
    fetchMock.enableMocks();
    const httpService = new HttpService();
    const apiUrl: string = 'http://localhost:3004';
    const url: string = '/test';

    beforeEach(() => {
        fetch.resetMocks();
    });

    test('call Api once', async () => {
        fetch.mockResponseOnce(JSON.stringify({}));
        await httpService.get(url);
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    test('call to specific Api url', async () => {
        fetch.mockResponseOnce(JSON.stringify({}));
        await httpService.get(url);
        expect(fetch).toHaveBeenCalledWith(`${apiUrl}${url}`);
    });

    test('return data', async () => {
        fetch.mockResponseOnce(JSON.stringify(JSON.stringify({ ok: true })));
        const result = await httpService.get(url);
        expect(result.ok).toBeTruthy();
    });

    test('return null then exception', async () => {
        fetch.mockReject(() => Promise.reject('API is down'));
        const result = await httpService.get(url);
        expect(result).toBeFalsy();
    });
});
