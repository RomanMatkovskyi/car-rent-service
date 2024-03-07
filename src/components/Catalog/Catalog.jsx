import { CatalogList } from './Catalog.styled';
import CatalogItem from './CatalogItem/CatalogItem';
import { useSelector } from 'react-redux';
import { getCars } from '../../redux/selector';
import { nanoid } from 'nanoid';

const Catalog = () => {
  const carData = useSelector(getCars);
  return (
    <>
      <CatalogList>
        {carData.map((car) => {
          return <CatalogItem key={nanoid()} data={car} />;
        })}
      </CatalogList>
    </>
  );
};

export default Catalog;
