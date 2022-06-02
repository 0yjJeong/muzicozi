import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import HomePage from './pages/home/HomePage';
import { theme } from './theme/muzicoziTheme';
import { GlobalStyle } from './GlobalStyle';
import { Page } from './layout/page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Page>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </Page>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
