import { render } from '@testing-library/react';
import Messages from './Messages';

describe('Messages Component', () => {
    test('renders aside tagname', () => {
        const { container } = render(<Messages />);
        expect(container.getElementsByTagName('aside')[0]).toBeInTheDocument();
    });
    test('has .messages class', () => {
        const { container } = render(<Messages />);
        expect(container.getElementsByClassName('messages')[0]).toBeInTheDocument();
    });
});