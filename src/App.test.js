import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DataWave app', () => {
  render(<App />);
  const titleElement = screen.getByText(/DataWave/i);
  expect(titleElement).toBeInTheDocument();
});
