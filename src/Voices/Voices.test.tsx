import { render, cleanup, waitFor } from '@testing-library/react';
import Voices from './Voices';
import { BrowserRouter } from 'react-router-dom';
import { VoiceModel } from 'shared';
import fetchMock from 'jest-fetch-mock';
import fetch from 'jest-fetch-mock';

const voices: VoiceModel[] = [{
    "id": "2x1",
    "name": "2x1",
    "icon": "VoicesVoiceIcon01.png",
    "tags": [
      "misc"
    ]
  },
  {
    "id": "8bits",
    "name": "8bits",
    "icon": "VoicesVoiceIcon02.png",
    "tags": [
      "devices"
    ]
  },
  {
    "id": "adult-to-children",
    "name": "Adult to children",
    "icon": "VoicesVoiceIcon03.png",
    "tags": [
      "human"
    ]
  }
];

describe('Voices Component', () => {
    fetchMock.enableMocks();

    beforeEach(() => {
        fetchMock.doMock();
    });

    afterEach(cleanup);

    test('has .voices class', () => {
        const { container } = render(<BrowserRouter><Voices /></BrowserRouter>);
        expect(container.getElementsByClassName('voices')[0]).toBeInTheDocument();
    });

    test('has voices rendered with 3 items', async () => {
        fetch.mockResponseOnce(JSON.stringify(voices));
        const { container } = render(<BrowserRouter><Voices /></BrowserRouter>);        
        await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
        await waitFor(() => expect(container.getElementsByClassName('voices__list')[0]).toBeInTheDocument());
        await waitFor(() => expect(container.getElementsByClassName('voices__item').length).toEqual(3));
    });
});