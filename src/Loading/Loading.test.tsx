import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Loading Component', () => {
    test('renders <aside> tagname', () => {
        const { container } = render(<Loading />);
        expect(container.getElementsByTagName('aside')[0]).toBeInTheDocument();
    });

    test('has .loading class', () => {
        const { container } = render(<Loading />);
        expect(container.getElementsByClassName('loading')[0]).toBeInTheDocument();
    });
});