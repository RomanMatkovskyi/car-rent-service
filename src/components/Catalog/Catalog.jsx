import { CatalogList } from './Catalog.styled';
import CatalogItem from './CatalogItem/CatalogItem';
import { getCars } from '../../redux/selector';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

const Catalog = () => {
  let carData = useSelector(getCars);
  return (
    <>
      <CatalogList>
        {carData &&
          carData.map((car) => {
            return <CatalogItem key={nanoid()} data={car} />;
          })}
      </CatalogList>
    </>
  );
};

export default Catalog;
