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

export default function ContactForm({ onAddNewContact, type, contact }) {
  const router = useRouter();

  const [currentContact, setCurrentContact] = useState({ ...contact });
  const isEqual = JSON.stringify(currentContact) === JSON.stringify(contact);

  function handleUserInput(event, fieldName, fieldIndex) {
    if (fieldName === "deceased") {
      setCurrentContact({ ...currentContact, deceased: event.target.checked });
    } else if (fieldName === "emailOne") {
      let updatedEmail;
      if (currentContact.email) {
        updatedEmail = currentContact.email.map((email, index) => {
          if (index === fieldIndex) {
            return { ...email, value: event.target.value };
          }
          return email;
        });
      }

      setCurrentContact({
        ...currentContact,
        email: updatedEmail,
      });
    } else if (fieldName === "phoneOne") {
      const updatedPhone = currentContact.phone.map((phone, index) => {
        if (index === fieldIndex) {
          return { ...phone, value: event.target.value };
        }
        return phone;
      });

      setCurrentContact({
        ...currentContact,
        phone: updatedPhone,
      });
    } else if (fieldName === "instagram") {
      const updatedSocialMedia = currentContact.socialMedia.map((media) => {
        if (media.platform === "Instagram") {
          return { ...media, username: event.target.value };
        }
        return media;
      });

      setCurrentContact({
        ...currentContact,
        socialMedia: updatedSocialMedia,
      });
    } else if (fieldName === "twitter") {
      const updatedSocialMedia = currentContact.socialMedia.map((media) => {
        if (media.platform === "Twitter") {
          return { ...media, username: event.target.value };
        }
        return media;
      });

      setCurrentContact({
        ...currentContact,
        socialMedia: updatedSocialMedia,
      });
    } else if (fieldName === "facebook") {
      const updatedSocialMedia = currentContact.socialMedia.map((media) => {
        if (media.platform === "Facebook") {
          return { ...media, username: event.target.value };
        }
        return media;
      });

      setCurrentContact({
        ...currentContact,
        socialMedia: updatedSocialMedia,
      });
    } else if (fieldName === "notes") {
      setCurrentContact({ ...currentContact, notes: event.target.value });
    } else {
      setCurrentContact({ ...currentContact, [fieldName]: event.target.value });
    }
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newContact = Object.fromEntries(formData);

    const newContactId = uid();

    const date = new Date();
    const currentUtcDateTime = date.toISOString();

    // console.log("newContact: ", newContact);

    const formattedContact = {
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
      ].filter((socialMedia) => socialMedia.username),
      notes: newContact.notes,
      dateCreated: currentUtcDateTime,
      dateDeleted: "",
      isSampleData: false,
    };

    onAddNewContact(formattedContact);
    router.push(formattedContact.id);
  }

  let instagram = {};
  if (contact) {
    instagram = currentContact.socialMedia.find(
      (media) => media.platform === "Instagram"
    );
  }

  let twitter = {};
  if (contact) {
    twitter = currentContact.socialMedia.find(
      (media) => media.platform === "Twitter"
    );
  }

  let facebook = {};
  if (contact) {
    facebook = currentContact.socialMedia.find(
      (media) => media.platform === "Facebook"
    );
  }

  let emailOneValue = "";
  if (currentContact.email) {
    emailOneValue = currentContact.email[0]
      ? currentContact.email[0].value
      : "";
  }

  let emailOneTypeValue = "";
  if (currentContact.email) {
    emailOneTypeValue = currentContact.email[0]
      ? currentContact.email[0].type
      : "";
  }

  let emailTwoValue = "";
  if (currentContact.email) {
    emailTwoValue = currentContact.email[1]
      ? currentContact.email[1].value
      : "";
  }

  let emailTwoTypeValue = "";
  if (currentContact.email) {
    emailTwoTypeValue = currentContact.email[1]
      ? currentContact.email[1].type
      : "";
  }

  return (
    <>
      <StyledHeader>
        <ContactDetailsHeader contact={currentContact} />
      </StyledHeader>

      <Heading id="form-heading">
        {type === "update" ? "Update contact" : "Create new contact"}
      </Heading>
      <form aria-labelledby="form-heading" onSubmit={handleSubmitForm}>
        <StyledFieldset>
          <legend>Personal Information</legend>
          <SingleLineInput
            type={"text"}
            labelContent="First name (required)"
            id="firstName"
            name="firstName"
            value={currentContact.firstName}
            onChange={(event) => handleUserInput(event, "firstName")}
            required
          />
          <SingleLineInput
            type={"text"}
            labelContent="Middle name"
            id="middleName"
            name="middleName"
            value={currentContact.middleName}
            onChange={(event) => handleUserInput(event, "middleName")}
          />
          <SingleLineInput
            type={"text"}
            labelContent="Last name"
            id="lastName"
            name="lastName"
            value={currentContact.lastName}
            onChange={(event) => handleUserInput(event, "lastName")}
          />
          <SingleLineInput
            type={"text"}
            labelContent="Nickname"
            id="nickName"
            name="nickName"
            value={currentContact.nickName}
            onChange={(event) => handleUserInput(event, "nickName")}
          />
          <SingleLineInput
            type={"singleSelect"}
            labelContent="Gender"
            id="gender"
            name="gender"
            value={currentContact.gender}
            // onChange={(event) => handleUserInput(event, "gender")}
            options={baseGender}
            isClearable={true}
          />
          <SingleLineInput
            type={"date"}
            labelContent="Birthday"
            id="dateOfBirth"
            name="dateOfBirth"
            max={new Date().toISOString().slice(0, 10)}
            value={
              currentContact.dateOfBirth
                ? currentContact.dateOfBirth.substring(0, 10)
                : null
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
            type={"email"}
            labelContent="E-Mail"
            id="emailOne"
            typeId="emailOneType"
            name="emailOne"
            typeName="emailOneType"
            options={baseEmailInputType}
            value={emailOneValue}
            onChange={(event) => handleUserInput(event, "emailOne", 0)}
            typeValue={emailOneTypeValue}
          />
          <TwoLineInput
            type={"email"}
            labelContent="E-Mail"
            id="emailTwo"
            typeId="emailTwoType"
            name="emailTwo"
            typeName="emailTwoType"
            options={baseEmailInputType}
            value={emailTwoValue}
            onChange={(event) => handleUserInput(event, "emailTwo", 1)}
            typeValue={emailTwoTypeValue}
          />
          <TwoLineInput
            type={"tel"}
            labelContent="Phone"
            id="phoneOne"
            typeID="phoneOneType"
            name="phoneOne"
            typeName="phoneOneType"
            options={basePhoneInputType}
            value={() => {
              if (currentContact.phone) {
                currentContact.phone[1] ? currentContact.phone[1].value : "";
              }
            }}
            onChange={(event) => handleUserInput(event, "phoneOne", 0)}
          />
          <TwoLineInput
            type={"tel"}
            labelContent="Phone"
            id="phoneTwo"
            typeId="phoneTwoType"
            name="phoneTwo"
            typeName="phoneTwoName"
            options={basePhoneInputType}
            value={() => {
              if (currentContact.phone) {
                currentContact.phone[1] ? currentContact.phone[1].value : "";
              }
            }}
            onChange={(event) => handleUserInput(event, "phoneOne", 1)}
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
            value={instagram ? instagram.username : ""}
            onChange={(event) => handleUserInput(event, "instagram")}
          />
          <SingleLineInput
            type={"text"}
            labelContent="Twitter"
            id="twitter"
            name="twitter"
            value={twitter ? twitter.username : ""}
            onChange={(event) => handleUserInput(event, "twitter")}
          />
          <SingleLineInput
            type={"text"}
            labelContent="Facebook"
            id="facebook"
            name="facebook"
            value={facebook ? facebook.username : ""}
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
            {type === "update" ? "Update contact" : "Add new contact"}
          </Button>
        </ButtonsContainer>
      </form>
    </>
  );
}
