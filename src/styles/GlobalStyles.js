import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    line-height: 1.5;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: background 0.3s ease, color 0.3s ease;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
  }

  button {
    font-family: inherit;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  input, textarea, select {
    font-family: inherit;
    border: 1px solid ${props => props.theme.border};
    border-radius: 4px;
    padding: 0.5rem;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.border};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.primary};
  }
`;

export default GlobalStyles;
