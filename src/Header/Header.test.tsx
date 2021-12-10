import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {

    test('renders <header> tagname', () => {
        const { container } = render(<BrowserRouter><Header /></BrowserRouter>);
        expect(container.getElementsByTagName('header')[0]).toBeInTheDocument();
    });

    test('has .header class', () => {
        const { container } = render(<BrowserRouter><Header /></BrowserRouter>);
        expect(container.getElementsByClassName('header')[0]).toBeInTheDocument();
    });
});