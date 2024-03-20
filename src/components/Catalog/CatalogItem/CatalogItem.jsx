import {
  CarItemWrapper,
  FavoriteBtn,
  CarImgWrapper,
  CarImg,
  CarTitleWrapper,
  CarTitle,
  CarTitleModel,
  CarTitlePrice,
  CarDescription,
  CarDescriptionLi,
  CarDescriptionItem,
  LearnMoreBtn,
  PopUpWrapper,
} from './CatalogItem.styled';
import sprite from '../../../assets/symbol-defs.svg';
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
    rentalPrice,
    rentalCompany,
    type,
  } = data;
  const addresArray = address && address.split(',');
  const [PopUpOpen, setPopUpOpen] = useState(false);

  const BackdropClose = (event) => {
    const container = event.target.closest('[name="drop"]');
    if (container) {
      setPopUpOpen(false);
    }
  };

  return (
    <>
      <CarItemWrapper>
        <CarImgWrapper>
          <FavoriteBtn>
            <svg width="16" height="16">
              <use xlinkHref={`${sprite}#icon-normal`}></use>
            </svg>
          </FavoriteBtn>
          <CarImg
            src={img ? img : noCarFoto}
            alt="car example"
            width={274}
            height={280}
          />
        </CarImgWrapper>
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
        <>
          <PopUpWrapper name="drop" onClick={BackdropClose}></PopUpWrapper>
          <PopUp
            data={data}
            PopUpOpen={PopUpOpen}
            setPopUpOpen={setPopUpOpen}
          />
        </>
      )}
    </>
  );
};

export default CatalogItem;
