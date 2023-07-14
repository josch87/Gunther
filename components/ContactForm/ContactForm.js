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
  Heading,
  StyledFieldset,
  StyledHeader,
  StyledTextarea,
} from "./ContactForm.styled";
import Button, { PrimaryButton } from "../Button/Button";
import { useRouter } from "next/router";
import City from "./City/City";
import Checkbox from "./Checkbox/Checkbox";
import ContactDetailsHeader from "../ContactDetailsHeader/ContactDetailsHeader";
import { useState } from "react";
import { uid } from "uid";

export default function ContactForm({ onAddNewContact }) {
  const router = useRouter();

  const [currentContact, setCurrentContact] = useState({
    firstName: "New contact",
    middleName: "",
    lastName: "",
  });

  function handleUserInput(event, fieldName) {
    if (fieldName === "firstName") {
      setCurrentContact({ ...currentContact, firstName: event.target.value });
    }
    if (fieldName === "middleName") {
      setCurrentContact({ ...currentContact, middleName: event.target.value });
    }
    if (fieldName === "lastName") {
      setCurrentContact({ ...currentContact, lastName: event.target.value });
    }
    if (fieldName === "dateOfBirth") {
      setCurrentContact({ ...currentContact, dateOfBirth: event.target.value });
    }
  }

  function handleCancelButton() {
    router.back();
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newContact = Object.fromEntries(formData);

    const newContactId = uid();

    const date = new Date();
    const currentUtcDateTime = date.toISOString();

    const formattedContact = {
      ...newContact,
      id: newContactId,
      firstName: newContact.firstName,
      middleName: newContact.middleName,
      lastName: newContact.lastName,
      nickName: newContact.nickName,
      gender: newContact.gender,
      profilePicture: "",
      dateOfBirth: newContact.dateOfBirth,
      deceased: newContact.deceased || false,
      email: [
        {
          value: newContact.emailOne,
          type: newContact.emailOneType,
        },
        {
          value: newContact.emailTwo,
          type: newContact.emailTwoType,
        },
      ].filter((email) => email.value),
      phone: [
        {
          value: newContact.phoneOne,
          type: newContact.phoneOneType,
        },
        {
          value: newContact.phoneTwo,
          type: newContact.phoneTwoType,
        },
      ].filter((phone) => phone.value),
      address: [
        {
          type: newContact.addressOneType,
          street: newContact.addressOneStreet,
          zipCode: newContact.addressOneZipCode,
          city: newContact.addressOneCity,
          country: newContact.addressOneCountry,
        },
        {
          type: newContact.addressTwoType,
          street: newContact.addressTwoStreet,
          zipCode: newContact.addressTwoZipCode,
          city: newContact.addressTwoCity,
          country: newContact.addressTwoCountry,
        },
      ].filter((address) => Object.values(address).some(Boolean)),
      socialMedia: [
        {
          platform: "Instagram",
          username: newContact.instagram,
        },
        {
          platform: "Twitter",
          username: newContact.twitter,
        },
        {
          platform: "Facebook",
          username: newContact.facebook,
        },
      ].filter((socialMedia) => (socialMedia.username ? true : false)),
      notes: newContact.notes,
      dateCreated: currentUtcDateTime,
      dateDeleted: "",
      isSampleData: false,
    };

    onAddNewContact(formattedContact);
    router.push(formattedContact.id);
  }

  return (
    <>
      <StyledHeader>
        <ContactDetailsHeader contact={currentContact} />
      </StyledHeader>

      <Heading id="form-heading">Create new contact</Heading>
      <form aria-labelledby="form-heading" onSubmit={handleSubmitForm}>
        <StyledFieldset>
          <legend>Personal Information</legend>
          <SingleLineInput
            type={"text"}
            labelContent="First name (required)"
            id="firstName"
            name="firstName"
            onChange={(event) => handleUserInput(event, "firstName")}
            required
          />
          <SingleLineInput
            type={"text"}
            labelContent="Middle name"
            id="middleName"
            name="middleName"
            onChange={(event) => handleUserInput(event, "middleName")}
          />
          <SingleLineInput
            type={"text"}
            labelContent="Last name"
            id="lastName"
            name="lastName"
            onChange={(event) => handleUserInput(event, "lastName")}
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
            onChange={(event) => handleUserInput(event, "dateOfBirth")}
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
          <StyledTextarea
            name="notes"
            rows="10"
            maxLength="500"
          ></StyledTextarea>
        </StyledFieldset>

        <ButtonsContainer>
          <Button type="button" onClick={handleCancelButton}>
            Cancel
          </Button>
          <Button type="submit" buttonType="primary">
            Add new contact
          </Button>
        </ButtonsContainer>
      </form>
    </>
  );
}
