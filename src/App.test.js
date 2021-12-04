import { render, screen } from '@testing-library/react';
import App from './App';
import fibonacci from './fibonacci';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/fibonacci/i);
  expect(linkElement).toBeInTheDocument();
});

test('fibonacci0', () => {
  var fib = fibonacci(0);
  expect(fib).toBe(0);
});

test('fibonacci1', () => {
  var fib = fibonacci(1);
  expect(fib).toBe(1);
});

test('fibonacci2', () => {
  var fib = fibonacci(2);
  expect(fib).toBe(1);
});

test('fibonacci3', () => {
  var fib = fibonacci(3);
  expect(fib).toBe(2);
});
test('fibonacci9', () => {
  var fib = fibonacci(9);
  expect(fib).toBe(34);
});
