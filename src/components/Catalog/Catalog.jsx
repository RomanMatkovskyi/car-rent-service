import FAKEDATA from "./adsCars.json";
import { CatalogList, CarItemWrapper, CarImg } from "./Catalog.styled";
import { addFavorite } from "../../redux/slice";
import CatalogItem from "./CatalogItem/CatalogItem";

const Catalog = () => {
  return (
    <>
      <CatalogList>
        {FAKEDATA.map(
          ({
            id,
            img,
            year,
            address,
            make,
            type,
            model,
            functionalities,
            rentalPrice,
            rentalCompany,
          }) => {
            return (
              <CatalogItem
                key={id}
                id={id}
                img={img}
                year={year}
                address={address}
                make={make}
                model={model}
                functionalities={functionalities}
                rentalPrice={rentalPrice}
                rentalCompany={rentalCompany}
                type={type}
              />
            );
          }
        )}
      </CatalogList>
    </>
  );
};

export default Catalog;
