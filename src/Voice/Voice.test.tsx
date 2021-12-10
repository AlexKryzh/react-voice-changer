import { render } from '@testing-library/react';
import Voice from './Voice';
import { BrowserRouter } from 'react-router-dom';
import { VoiceModel } from 'shared';

const voice: VoiceModel = {
    "id": "2x1",
    "name": "2x1",
    "icon": "VoicesVoiceIcon01.png",
    "tags": [
        "misc"
    ]
};

describe('Voice Component', () => {
    test('has .voice class', () => {
        const { container } = render(<BrowserRouter><Voice voice={voice} /></BrowserRouter>);
        expect(container.getElementsByClassName('voice')[0]).toBeInTheDocument();
    });
    test('show correct title', () => {
        const { container } = render(<BrowserRouter><Voice voice={voice} /></BrowserRouter>);
        expect(container.getElementsByClassName('voice__title')[0].textContent).toEqual(voice.name);
    });
});