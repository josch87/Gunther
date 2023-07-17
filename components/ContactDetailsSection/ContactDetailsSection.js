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

export default function ContactDetailsSection({ contact }) {
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
      {contact ? (
        <>
          <Heading>Contact Details</Heading>

          <ul>
            {contact.nickName ? (
              <ContactDetailsItem
                icon={materialName}
                iconAlt="Nickname"
                value={contact.nickName}
                type="Nickname"
              />
            ) : null}

            {contact.emailOneValue ? (
              <ContactDetailsItem
                icon={materialEmail}
                iconAlt={`${contact.emailOneValue} email address`}
                value={contact.emailOneValue}
                type={contact.emailOneType}
                href={`mailto:${contact.emailOneValue}`}
              />
            ) : null}

            {contact.emailTwoValue ? (
              <ContactDetailsItem
                icon={materialEmail}
                iconAlt={`${contact.emailTwoValue} email address`}
                value={contact.emailTwoValue}
                type={contact.emailTwoType}
                href={`mailto:${contact.emailTwoValue}`}
              />
            ) : null}

            {contact.phoneOneValue ? (
              <ContactDetailsItem
                icon={materialPhone}
                iconAlt={`${contact.phoneOneType} phone`}
                value={contact.phoneOneValue}
                type={contact.phoneOneType}
                href={`tel:${contact.phoneOneValue}`}
              />
            ) : null}

            {contact.phoneTwoValue ? (
              <ContactDetailsItem
                icon={materialPhone}
                iconAlt={`${contact.phoneTwoType} phone`}
                value={contact.phoneTwoValue}
                type={contact.phoneTwoType}
                href={`tel:${contact.phoneTwoValue}`}
              />
            ) : null}

            {addressOne ? (
              <ContactDetailsItem
                icon={materialAddress}
                iconAlt="Address"
                value={<Address {...addressOne} />}
                type={contact.addressOneType}
                href={getGoogleMapsLink(addressOne)}
                target="_blank"
              />
            ) : null}

            {addressTwo ? (
              <ContactDetailsItem
                icon={materialAddress}
                iconAlt="Address"
                value={<Address {...addressTwo} />}
                type={contact.addressTwoType}
                href={getGoogleMapsLink(addressTwo)}
                target="_blank"
              />
            ) : null}

            {contact.instagram ? (
              <ContactDetailsItem
                icon={getSocialMediaIcon("Instagram")}
                iconAlt={"Instagram"}
                value={contact.instagram}
                type={"Instagram"}
                href={getSocialMediaHyperlink("Instagram", contact.instagram)}
                target="_blank"
              />
            ) : null}

            {contact.twitter ? (
              <ContactDetailsItem
                icon={getSocialMediaIcon("Twitter")}
                iconAlt={"Twitter"}
                value={contact.twitter}
                type={"Twitter"}
                href={getSocialMediaHyperlink("Twitter", contact.twitter)}
                target="_blank"
              />
            ) : null}

            {contact.facebook ? (
              <ContactDetailsItem
                icon={getSocialMediaIcon("Facebook")}
                iconAlt={"Facebook"}
                value={contact.facebook}
                type={"Facebook"}
                href={getSocialMediaHyperlink("Facebook", contact.facebook)}
                target="_blank"
              />
            ) : null}

            {contact.notes ? (
              <ContactDetailsItem
                icon={materialNotes}
                iconAlt={"Notes"}
                value={contact.notes}
              />
            ) : null}
          </ul>
        </>
      ) : (
        <div>Loading ContactDetailsSection</div>
      )}
    </>
  );
}
