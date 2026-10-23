import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the UI garden heading and a component', () => {
  render(<App />);
  expect(screen.getByText('kopparthi_jashwanth UI Garden')).toBeInTheDocument();
  expect(screen.getAllByTestId('button').length).toBeGreaterThan(0);
});
