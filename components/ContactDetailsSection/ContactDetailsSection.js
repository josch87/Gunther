import {
  materialAddress,
  materialEmail,
  materialName,
  materialNotes,
  materialPhone,
} from "@/assets/Icons8";
import ContactDetailsItem from "@/components/ContactDetailsItem/ContactDetailsItem";
import {
  getGoogleMapsLink,
  getSocialMediaHyperlink,
  getSocialMediaIcon,
} from "@/utils/getContactDetails";
import Address from "../Address/Address";
import { Heading } from "./ContactDetailsSection.styled";
import React from "react";

export default function ContactDetailsSection({ contact }) {
  if (!contact) {
    return <p>Loading ContactDetailsSection</p>;
  }

  let addressOne;
  let addressTwo;

  if (contact) {
    if (
      contact.addressOneStreet ||
      contact.addressOneZip ||
      contact.addressOneCity ||
      contact.addressOneCountry
    ) {
      addressOne = {
        street: contact.addressOneStreet,
        zipCode: contact.addressOneZipCode,
        city: contact.addressOneCity,
        country: contact.addressOneCountry,
        type: contact.addressOneType,
      };
    }

    if (
      contact.addressTwoStreet ||
      contact.addressTwoZip ||
      contact.addressTwoCity ||
      contact.addressTwoCountry
    ) {
      addressTwo = {
        street: contact.addressTwoStreet,
        zipCode: contact.addressTwoZipCode,
        city: contact.addressTwoCity,
        country: contact.addressTwoCountry,
        type: contact.addressTwoType,
      };
    }
  }

  return (
    <>
      <Heading>Contact Details</Heading>

      <ul>
        {contact.nickName && (
          <ContactDetailsItem
            icon={materialName}
            iconAlt="Nickname"
            value={contact.nickName}
            type="Nickname"
          />
        )}

        {contact.emailOneValue && (
          <ContactDetailsItem
            icon={materialEmail}
            iconAlt="Email address"
            value={contact.emailOneValue}
            type={contact.emailOneType}
            href={`mailto:${contact.emailOneValue}`}
            title="Write an email"
          />
        )}

        {contact.emailTwoValue && (
          <ContactDetailsItem
            icon={materialEmail}
            iconAlt="Email address"
            value={contact.emailTwoValue}
            type={contact.emailTwoType}
            href={`mailto:${contact.emailTwoValue}`}
            title="Write an email"
          />
        )}

        {contact.phoneOneValue && (
          <ContactDetailsItem
            icon={materialPhone}
            iconAlt="Phone number"
            value={contact.phoneOneValue}
            type={contact.phoneOneType}
            href={`tel:${contact.phoneOneValue}`}
            title="Start a call"
          />
        )}

        {contact.phoneTwoValue && (
          <ContactDetailsItem
            icon={materialPhone}
            iconAlt="Phone number"
            value={contact.phoneTwoValue}
            type={contact.phoneTwoType}
            href={`tel:${contact.phoneTwoValue}`}
            title="Start a call"
          />
        )}

        {addressOne && (
          <ContactDetailsItem
            icon={materialAddress}
            iconAlt="Address"
            value={<Address {...addressOne} />}
            type={contact.addressOneType}
            href={getGoogleMapsLink(addressOne)}
            target="_blank"
            title="Visit Google Maps"
          />
        )}

        {addressTwo && (
          <ContactDetailsItem
            icon={materialAddress}
            iconAlt="Address"
            value={<Address {...addressTwo} />}
            type={contact.addressTwoType}
            href={getGoogleMapsLink(addressTwo)}
            target="_blank"
            title="Visit Google Maps"
          />
        )}

        {contact.instagram && (
          <ContactDetailsItem
            icon={getSocialMediaIcon("Instagram")}
            iconAlt="Instagram"
            value={contact.instagram}
            type="Instagram"
            href={getSocialMediaHyperlink("Instagram", contact.instagram)}
            target="_blank"
            title="Visit Instagram"
          />
        )}

        {contact.twitter && (
          <ContactDetailsItem
            icon={getSocialMediaIcon("Twitter")}
            iconAlt="Twitter"
            value={contact.twitter}
            type="X"
            href={getSocialMediaHyperlink("Twitter", contact.twitter)}
            target="_blank"
            title="Visit X"
          />
        )}

        {contact.facebook && (
          <ContactDetailsItem
            icon={getSocialMediaIcon("Facebook")}
            iconAlt="Facebook"
            value={contact.facebook}
            type="Facebook"
            href={getSocialMediaHyperlink("Facebook", contact.facebook)}
            target="_blank"
            title="Visit Facebook"
          />
        )}

        {contact.notes && (
          <ContactDetailsItem
            icon={materialNotes}
            iconAlt="Notes"
            value={contact.notes.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          />
        )}
      </ul>
    </>
  );
}
