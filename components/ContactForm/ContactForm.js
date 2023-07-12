import { baseGender } from "@/data/BaseData";
import SingleLineInput from "./SingleLineInput/SingleLineInput";
import TwoLineInput from "./TwoLineInput/TwoLineInput";
import { ButtonsContainer, StyledFieldset } from "./ContactForm.styled";
import Button, { PrimaryButton } from "../Button/Button";

export default function ContactForm() {
  return (
    <form>
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
      </StyledFieldset>

      <StyledFieldset>
        <legend>Contact Information</legend>
        <TwoLineInput
          type={"email"}
          labelContent="E-Mail"
          id="email"
          name="email"
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

      <ButtonsContainer>
        <Button type="button">Cancel</Button>
        <PrimaryButton type="submit">Save</PrimaryButton>
      </ButtonsContainer>
    </form>
  );
}
