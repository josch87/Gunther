import {
  baseAddressInputType,
  baseEmailInputType,
  baseGender,
  basePhoneInputType,
} from "@/data/BaseData";
import SingleLineInput from "./SingleLineInput/SingleLineInput";
import TwoLineInput from "./TwoLineInput/TwoLineInput";
import {
  ButtonsContainer,
  StyledFieldset,
  StyledTextarea,
} from "./ContactForm.styled";
import Button, { PrimaryButton } from "../Button/Button";
import { useRouter } from "next/router";
import City from "./City/City";
import Checkbox from "./Checkbox/Checkbox";

export default function ContactForm({ onAddNewContact }) {
  const router = useRouter();

  function handleCancelButton() {
    router.back();
  }

  return (
    <form onSubmit={onAddNewContact}>
      <StyledFieldset>
        <legend>Personal Information</legend>
        <SingleLineInput
          type={"text"}
          labelContent="First name"
          id="firstName"
          name="firstName"
          required
        />
        <SingleLineInput
          type={"text"}
          labelContent="Middle name"
          id="middleName"
          name="middleName"
        />
        <SingleLineInput
          type={"text"}
          labelContent="Last name"
          id="lastName"
          name="lastName"
        />
        <SingleLineInput
          type={"text"}
          labelContent="Nickname"
          id="nickName"
          name="nickName"
        />
        <SingleLineInput
          type={"singleSelect"}
          labelContent="Gender"
          id="gender"
          name="gender"
          options={baseGender}
          isClearable={true}
        />
        <SingleLineInput
          type={"date"}
          labelContent="Birthday"
          id="dateOfBirth"
          name="dateOfBirth"
          max={new Date().toISOString().slice(0, 10)}
        />
        <Checkbox id="deceased" name="deceased" labelContent="Deceased" />
      </StyledFieldset>

      <StyledFieldset>
        <legend>Contact Information</legend>
        <TwoLineInput
          type={"email"}
          labelContent="E-Mail"
          id="emailOne"
          typeId="emailOneType"
          name="emailOne"
          typeName="emailOneType"
          options={baseEmailInputType}
        />
        <TwoLineInput
          type={"email"}
          labelContent="E-Mail"
          id="emailTwo"
          typeId="emailTwoType"
          name="emailTwo"
          typeName="emailTwoType"
          options={baseEmailInputType}
        />
        <TwoLineInput
          type={"tel"}
          labelContent="Phone"
          id="phoneOne"
          typeID="phoneOneType"
          name="phoneOne"
          typeName="phoneOneType"
          options={basePhoneInputType}
        />
        <TwoLineInput
          type={"tel"}
          labelContent="Phone"
          id="phoneTwo"
          typeId="phoneTwoType"
          name="phoneTwo"
          typeName="phoneTwoName"
          options={basePhoneInputType}
        />
        <SingleLineInput
          type={"text"}
          labelContent="Street"
          id="addressOneStreet"
          name="addressOneStreet"
        />
        <City id="addressOne" name="addressOne" />
        <TwoLineInput
          type={"text"}
          labelContent="Country"
          id="addressOneCountry"
          typeId="addressOneType"
          name="addressOneCountry"
          typeName="addressOneType"
          options={baseAddressInputType}
        />
        <SingleLineInput
          type={"text"}
          labelContent="Street"
          id="addressTwoStreet"
          name="addressTwoStreet"
        />
        <City id="addressTwo" name="addressTwo" />
        <TwoLineInput
          type={"text"}
          labelContent="Country"
          id="addressTwoCountry"
          typeId="addressTwoType"
          name="addressTwoCountry"
          typeName="addressTwoType"
          options={baseAddressInputType}
        />
      </StyledFieldset>

      <StyledFieldset>
        <legend>Social Media</legend>
        <SingleLineInput
          type={"text"}
          labelContent="Instagram"
          id="instagram"
          name="instagram"
        />
        <SingleLineInput
          type={"text"}
          labelContent="Twitter"
          id="twitter"
          name="twitter"
        />
        <SingleLineInput
          type={"text"}
          labelContent="Facebook"
          id="facebook"
          name="facebook"
        />
      </StyledFieldset>

      <StyledFieldset>
        <legend>Notes</legend>
        <StyledTextarea name="notes" rows="10" maxLength="500"></StyledTextarea>
      </StyledFieldset>

      <ButtonsContainer>
        <Button type="button" onClick={handleCancelButton}>
          Cancel
        </Button>
        <PrimaryButton type="submit">Add new contact</PrimaryButton>
      </ButtonsContainer>
    </form>
  );
}
