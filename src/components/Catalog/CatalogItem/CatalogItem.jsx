import {
  CarItemWrapper,
  CarImg,
  CarTitleWrapper,
  CarTitle,
  CarTitleModel,
  CarTitlePrice,
  CarDescription,
  CarDescriptionLi,
  CarDescriptionItem,
  LearnMoreBtn,
} from './CatalogItem.styled';
import noCarFoto from '../../../assets/no_photo.png';
import PopUp from '../PopUp/PopUp';
import { useState } from 'react';

const CatalogItem = ({ data }) => {
  const {
    id,
    img,
    year,
    address,
    make,
    model,
    functionalities,
    rentalPrice,
    rentalCompany,
    type,
  } = data;
  const addresArray = address.split(',');
  const [PopUpOpen, setPopUpOpen] = useState(false);

  return (
    <>
      <CarItemWrapper>
        <CarImg
          src={img ? img : noCarFoto}
          alt="car example"
          width={274}
          height={280}
        />
        <div>
          <CarTitleWrapper>
            <CarTitle>
              {make} <CarTitleModel>{`${model ? model : ''},`}</CarTitleModel>{' '}
              <span>{year}</span>
            </CarTitle>
            <CarTitlePrice>{rentalPrice}</CarTitlePrice>
          </CarTitleWrapper>
          <CarDescription>
            <CarDescriptionLi>
              <CarDescriptionItem>{addresArray[1].trim()}</CarDescriptionItem>
            </CarDescriptionLi>
            <CarDescriptionLi>
              <CarDescriptionItem>{addresArray[2].trim()}</CarDescriptionItem>
            </CarDescriptionLi>
            <CarDescriptionLi>
              <CarDescriptionItem>{rentalCompany}</CarDescriptionItem>
            </CarDescriptionLi>
            <CarDescriptionLi>
              <CarDescriptionItem>{type}</CarDescriptionItem>
            </CarDescriptionLi>
            <CarDescriptionLi>
              <CarDescriptionItem>{model}</CarDescriptionItem>
            </CarDescriptionLi>
            <CarDescriptionLi>
              <CarDescriptionItem>{id}</CarDescriptionItem>
            </CarDescriptionLi>
            {/* <CarDescriptionLi>
              <CarDescriptionItem>{functionalities[0]}</CarDescriptionItem>
            </CarDescriptionLi> */}
          </CarDescription>
          <LearnMoreBtn
            type="button"
            onClick={() => {
              setPopUpOpen(true);
            }}
          >
            Learn more
          </LearnMoreBtn>
        </div>
      </CarItemWrapper>
      {PopUpOpen && (
        <PopUp data={data} PopUpOpen={PopUpOpen} setPopUpOpen={setPopUpOpen} />
      )}
    </>
  );
};

export default CatalogItem;
