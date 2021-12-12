import { render } from '@testing-library/react';
import VoicesHeader from './VoicesHeader';
import { BrowserRouter } from 'react-router-dom';

describe('Voice Component', () => {
    test('has .voice class', () => {
        const { container } = render(<BrowserRouter><VoicesHeader sortDesc={false} onSetSortDesc={() => {}} onSetSearchText={()=>{}} onRandomSelect={()=>{}} /></BrowserRouter>);
        expect(container.getElementsByClassName('voices-header')[0]).toBeInTheDocument();
    });
});