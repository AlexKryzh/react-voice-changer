import { render } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound Component', () => {
    test('has .not-found class', () => {
        const { container } = render(<NotFound />);
        expect(container.getElementsByClassName('not-found')[0]).toBeInTheDocument();
    });
});