import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import SecondPage from 'pages/SecondPage/SecondPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<SecondPage />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
