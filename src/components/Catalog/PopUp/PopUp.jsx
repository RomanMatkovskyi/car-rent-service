import {
  CloseBtn,
  Modal,
  CarImg,
  CarTitle,
  KeyWordsList,
  KeyWords,
  CarTitleWrapper,
  CarDescription,
  BenefitsTitle,
  BenefitsList,
  RentalConditionList,
  RentalConditionItem,
  RentCarBtn,
} from './PopUp.styled';
import noFoto from '../../../assets/no_photo.png';

const PopUp = ({ data, PopUpOpen, setPopUpOpen }) => {
  const {
    img,
    address,
    id,
    make,
    model,
    year,
    type,
    engineSize,
    fuelConsumption,
    description,
    rentalConditions,
    mileage,
    rentalPrice,
    accessories,
    functionalities,
  } = data;
  const addresArray = address.split(',');
  const rentCondintions = rentalConditions.split(/\n|\r\n/);
  const benefits = accessories.concat(functionalities);
  return (
    <Modal open={PopUpOpen}>
      <CloseBtn
        onClick={() => {
          setPopUpOpen(false);
        }}
      >
        X
      </CloseBtn>
      <CarImg
        src={img ? img : noFoto}
        alt="rent car"
        width={461}
        height={248}
      />
      <CarTitleWrapper>
        <CarTitle>
          {make} <span>{model}</span>
          {','} {year}
        </CarTitle>
        <KeyWordsList>
          <li>
            <KeyWords>{addresArray[1].trim()}</KeyWords>
          </li>
          <li>
            <KeyWords>{addresArray[2].trim()}</KeyWords>
          </li>
          <li>
            <KeyWords>{`Id: ${id}`}</KeyWords>
          </li>
          <li>
            <KeyWords>{`Year: ${year}`}</KeyWords>
          </li>
          <li>
            <KeyWords>{`Type: ${type}`}</KeyWords>
          </li>
          <li>
            <KeyWords>{`Fuel Consumption: ${fuelConsumption}`}</KeyWords>
          </li>
          <li>
            <KeyWords>{`Engine Size: ${engineSize}`}</KeyWords>
          </li>
        </KeyWordsList>
      </CarTitleWrapper>
      <CarDescription>{description}</CarDescription>
      <BenefitsTitle>{'Accessories and functionalities'}</BenefitsTitle>
      <BenefitsList>
        {benefits.map((benefit, index) => (
          <li key={index}>
            <KeyWords>{benefit}</KeyWords>
          </li>
        ))}
      </BenefitsList>
      <BenefitsTitle>{'Rental Conditions:'}</BenefitsTitle>
      <RentalConditionList>
        {rentCondintions.map((cond, index) => (
          <RentalConditionItem key={index}>
            <p>{cond}</p>
          </RentalConditionItem>
        ))}
        <RentalConditionItem>
          <p>
            {`Mileage: `} <span>{mileage}</span>
          </p>
        </RentalConditionItem>
        <RentalConditionItem>
          <p>
            {`Price: `} <span>{rentalPrice}</span>
          </p>
        </RentalConditionItem>
      </RentalConditionList>
      <RentCarBtn href="tel:+380730000000" rel="noopener noreferrer">
        Rental Car
      </RentCarBtn>
    </Modal>
  );
};

export default PopUp;
