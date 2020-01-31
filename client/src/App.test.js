import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Login from './components/Login';

test('app renders', () => {
    render(<App/>);
})

test('renders form in Login', () => {
    const { getByTestId } = render(<Login />);
    getByTestId('login-form');  
  });