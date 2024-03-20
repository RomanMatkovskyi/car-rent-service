import { Container, LoadMoreBtn } from './CatalogPage.styled';
import { useEffect, useState } from 'react';
import { fetchCars } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getLoading } from '../../redux/selector';
import SearchBar from '../../components/SearchBar/SearchBar';
import Catalog from '../../components/Catalog/Catalog';
const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [page]);

  return (
    <Container className="container">
      <SearchBar />
      <Catalog />
      {!isLoading && (
        <LoadMoreBtn
          type="button"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load More
        </LoadMoreBtn>
      )}
    </Container>
  );
};

export default CatalogPage;
