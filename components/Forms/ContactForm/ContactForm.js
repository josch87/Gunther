import {
  baseAddressInputType,
  baseEmailInputType,
  baseGender,
  basePhoneInputType,
} from "@/data/BaseData";
import SingleLineInput from "../SingleLineInput/SingleLineInput";
import TwoLineInput from "../TwoLineInput/TwoLineInput";
import {
  ButtonsContainer,
  Heading,
  StickyContainer,
  StyledFieldset,
  StyledTextarea,
} from "./ContactForm.styled";
import Button from "../../Button/Button";
import { useRouter } from "next/router";
import City from "../City/City";
import Checkbox from "../Checkbox/Checkbox";
import ContactDetailsHeader from "../../ContactDetailsHeader/ContactDetailsHeader";
import { useState } from "react";

export default function ContactForm({ onSubmitForm, isUpdate, contact }) {
  const router = useRouter();

  const [currentContact, setCurrentContact] = useState(contact);
  const isEqual = JSON.stringify(currentContact) === JSON.stringify(contact);

  const [isUploadImageModalOpen, setIsUploadImageModalOpen] = useState(false);

  function openUploadImageModal() {
    setIsUploadImageModalOpen(true);
  }

  function closeUploadImageModal() {
    setIsUploadImageModalOpen(false);
  }

  function handleUploadImageToNewContact(newContactWithImage) {
    setCurrentContact(newContactWithImage);
    closeUploadImageModal();
  }

  function handleUserInput(event, fieldName) {
    if (fieldName === "deceased") {
      setCurrentContact({ ...currentContact, deceased: event.target.checked });
    } else if (fieldName === "gender") {
      setCurrentContact({
        ...currentContact,
        gender: event ? event.value : null,
      });
    } else if (fieldName === "emailOneType") {
      setCurrentContact({
        ...currentContact,
        emailOneType: event ? event.value : null,
      });
    } else if (fieldName === "emailTwoType") {
      setCurrentContact({
        ...currentContact,
        emailTwoType: event ? event.value : null,
      });
    } else if (fieldName === "phoneOneType") {
      setCurrentContact({
        ...currentContact,
        phoneOneType: event ? event.value : null,
      });
    } else if (fieldName === "phoneTwoType") {
      setCurrentContact({
        ...currentContact,
        phoneTwoType: event ? event.value : null,
      });
    } else if (fieldName === "addressOneType") {
      setCurrentContact({
        ...currentContact,
        addressOneType: event ? event.value : null,
      });
    } else if (fieldName === "addressTwoType") {
      setCurrentContact({
        ...currentContact,
        addressTwoType: event ? event.value : null,
      });
    } else {
      setCurrentContact({ ...currentContact, [fieldName]: event.target.value });
    }
  }

  return (
    <>
      <StickyContainer>
        <ContactDetailsHeader
          contact={currentContact}
          isUpdate={isUpdate}
          isEditMode
          isUploadImageModalOpen={isUploadImageModalOpen}
          openUploadImageModal={openUploadImageModal}
          closeUploadImageModal={closeUploadImageModal}
          onUploadFinished={
            isUpdate ? onSubmitForm : handleUploadImageToNewContact
          }
        />
      </StickyContainer>

      <Heading id="form-heading">
        {isUpdate ? "Update contact" : "Create new contact"}
      </Heading>
      <form
        aria-labelledby="form-heading"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitForm(currentContact);
        }}
      >
        <StyledFieldset>
          <legend>Personal Information</legend>
          <SingleLineInput
            type="text"
            labelContent="First name (required)"
            id="firstName"
            name="firstName"
            value={currentContact.firstName}
            onChange={(event) => handleUserInput(event, "firstName")}
            required
            autoFocus
          />
          <SingleLineInput
            type="text"
            labelContent="Middle name"
            id="middleName"
            name="middleName"
            value={currentContact.middleName}
            onChange={(event) => handleUserInput(event, "middleName")}
          />
          <SingleLineInput
            type="text"
            labelContent="Last name"
            id="lastName"
            name="lastName"
            value={currentContact.lastName}
            onChange={(event) => handleUserInput(event, "lastName")}
          />
          <SingleLineInput
            type="text"
            labelContent="Nickname"
            id="nickName"
            name="nickName"
            value={currentContact.nickName}
            onChange={(event) => handleUserInput(event, "nickName")}
          />
          <SingleLineInput
            type="singleSelect"
            labelContent="Gender"
            id="gender"
            name="gender"
            value={currentContact.gender}
            onChange={(event) => handleUserInput(event, "gender")}
            options={baseGender}
            isClearable={true}
          />
          <SingleLineInput
            type="date"
            labelContent="Birthday"
            id="dateOfBirth"
            name="dateOfBirth"
            max={new Date().toISOString().slice(0, 10)}
            value={
              currentContact.dateOfBirth
                ? currentContact.dateOfBirth.substring(0, 10)
                : ""
            }
            onChange={(event) => handleUserInput(event, "dateOfBirth")}
          />
          <Checkbox
            id="deceased"
            name="deceased"
            labelContent="Deceased"
            checked={currentContact.deceased}
            onChange={(event) => handleUserInput(event, "deceased")}
          />
        </StyledFieldset>

        <StyledFieldset>
          <legend>Contact Information</legend>
          <TwoLineInput
            type="email"
            labelContent="E-Mail"
            id="emailOne"
            typeId="emailOneType"
            name="emailOneValue"
            typeName="emailOneType"
            options={baseEmailInputType}
            value={currentContact.emailOneValue}
            onChange={(event) => handleUserInput(event, "emailOneValue")}
            typeValue={currentContact.emailOneType}
            typeOnChange={(event) => handleUserInput(event, "emailOneType")}
          />
          <TwoLineInput
            type={"email"}
            labelContent="E-Mail"
            id="emailTwo"
            typeId="emailTwoType"
            name="emailTwoValue"
            typeName="emailTwoType"
            options={baseEmailInputType}
            value={currentContact.emailTwoValue}
            onChange={(event) => handleUserInput(event, "emailTwoValue")}
            typeValue={currentContact.emailTwoType}
            typeOnChange={(event) => handleUserInput(event, "emailTwoType")}
          />
          <TwoLineInput
            type="tel"
            labelContent="Phone"
            id="phoneOne"
            typeID="phoneOneType"
            name="phoneOneValue"
            typeName="phoneOneType"
            options={basePhoneInputType}
            value={currentContact.phoneOneValue}
            onChange={(event) => handleUserInput(event, "phoneOneValue")}
            typeValue={currentContact.phoneOneType}
            typeOnChange={(event) => handleUserInput(event, "phoneOneType")}
          />
          <TwoLineInput
            type="tel"
            labelContent="Phone"
            id="phoneTwo"
            typeId="phoneTwoType"
            name="phoneTwoValue"
            typeName="phoneTwoType"
            options={basePhoneInputType}
            value={currentContact.phoneTwoValue}
            onChange={(event) => handleUserInput(event, "phoneTwoValue")}
            typeValue={currentContact.phoneTwoType}
            typeOnChange={(event) => handleUserInput(event, "phoneTwoType")}
          />
          <SingleLineInput
            type="text"
            labelContent="Street"
            id="addressOneStreet"
            name="addressOneStreet"
            value={currentContact.addressOneStreet}
            onChange={(event) => handleUserInput(event, "addressOneStreet")}
          />
          <City
            id="addressOne"
            name="addressOne"
            zipValue={currentContact.addressOneZipCode}
            zipOnChange={(event) => handleUserInput(event, "addressOneZipCode")}
            cityValue={currentContact.addressOneCity}
            cityOnChange={(event) => handleUserInput(event, "addressOneCity")}
          />
          <TwoLineInput
            type={"text"}
            labelContent="Country"
            id="addressOneCountry"
            typeId="addressOneType"
            name="addressOneCountry"
            typeName="addressOneType"
            options={baseAddressInputType}
            value={currentContact.addressOneCountry}
            onChange={(event) => handleUserInput(event, "addressOneCountry")}
            typeValue={currentContact.addressOneType}
            typeOnChange={(event) => handleUserInput(event, "addressOneType")}
          />
          <SingleLineInput
            type={"text"}
            labelContent="Street"
            id="addressTwoStreet"
            name="addressTwoStreet"
            value={currentContact.addressTwoStreet}
            onChange={(event) => handleUserInput(event, "addressTwoStreet")}
          />
          <City
            id="addressTwo"
            name="addressTwo"
            zipValue={currentContact.addressTwoZipCode}
            zipOnChange={(event) => handleUserInput(event, "addressTwoZipCode")}
            cityValue={currentContact.addressTwoCity}
            cityOnChange={(event) => handleUserInput(event, "addressTwoCity")}
          />
          <TwoLineInput
            type="text"
            labelContent="Country"
            id="addressTwoCountry"
            typeId="addressTwoType"
            name="addressTwoCountry"
            typeName="addressTwoType"
            options={baseAddressInputType}
            value={currentContact.addressTwoCountry}
            onChange={(event) => handleUserInput(event, "addressTwoCountry")}
            typeValue={currentContact.addressTwoType}
            typeOnChange={(event) => handleUserInput(event, "addressTwoType")}
          />
        </StyledFieldset>

        <StyledFieldset>
          <legend>Social Media</legend>
          <SingleLineInput
            type="text"
            labelContent="Instagram"
            id="instagram"
            name="instagram"
            value={currentContact.instagram}
            onChange={(event) => handleUserInput(event, "instagram")}
          />
          <SingleLineInput
            type="text"
            labelContent="X"
            id="twitter"
            name="twitter"
            value={currentContact.twitter}
            onChange={(event) => handleUserInput(event, "twitter")}
          />
          <SingleLineInput
            type="text"
            labelContent="Facebook"
            id="facebook"
            name="facebook"
            value={currentContact.facebook}
            onChange={(event) => handleUserInput(event, "facebook")}
          />
        </StyledFieldset>

        <StyledFieldset>
          <legend>Notes</legend>
          <StyledTextarea
            name="notes"
            rows="10"
            maxLength="600"
            value={currentContact.notes}
            onChange={(event) => handleUserInput(event, "notes")}
          ></StyledTextarea>
        </StyledFieldset>

        <ButtonsContainer>
          <Button type="button" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" buttonType="primary" disabled={isEqual}>
            {isUpdate ? "Update contact" : "Add new contact"}
          </Button>
        </ButtonsContainer>
      </form>
    </>
  );
}
