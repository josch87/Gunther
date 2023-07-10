import {
  materialAddress,
  materialEmail,
  materialName,
  materialNotes,
  materialPhone,
} from "@/assets/Icons8";
import ContactDetailsItem from "@/components/ContactDetailsItem/ContactDetailsItem";
import {
  getAddress,
  getGoogleMapsLink,
  getSocialMediaHyperlink,
  getSocialMediaIcon,
} from "@/utils/getContactDetails";
import { Fragment } from "react";

export default function ContactDetailsSection({ contact }) {
  return (
    <>
      {contact ? (
        <>
          <h2>Contact Details</h2>

          <ul>
            {contact.nickName ? (
              <ContactDetailsItem
                icon={materialName}
                iconAlt="Nickname"
                value={contact.nickName}
                type="Nickname"
              />
            ) : null}

            {contact.email ? (
              <ContactDetailsItem
                icon={materialEmail}
                iconAlt={`${contact.email.type} email address`}
                value={contact.email.value}
                type={contact.email.type}
                href={`mailto:${contact.email.value}`}
              />
            ) : null}

            {contact.phone
              ? contact.phone.map((phone, index) => (
                  <Fragment key={index}>
                    <ContactDetailsItem
                      icon={materialPhone}
                      iconAlt={`${phone.type} phone`}
                      value={phone.value}
                      type={phone.type}
                      href={`tel:${phone.value}`}
                    />
                  </Fragment>
                ))
              : null}

            {contact.address
              ? contact.address.map((addr, index) => {
                  return (
                    <Fragment key={index}>
                      <ContactDetailsItem
                        icon={materialAddress}
                        iconAlt="Address"
                        value={getAddress(addr)}
                        type={addr.type}
                        href={getGoogleMapsLink(addr)}
                        target="_blank"
                      />
                    </Fragment>
                  );
                })
              : null}

            {contact.socialMedia
              ? contact.socialMedia.map((media, index) => {
                  const mediaLink = getSocialMediaHyperlink(
                    media.platform,
                    media.username
                  );
                  return (
                    <Fragment key={index}>
                      <ContactDetailsItem
                        icon={getSocialMediaIcon(media.platform)}
                        iconAlt={media.platform}
                        value={media.username}
                        type={media.platform}
                        href={mediaLink}
                        target="_blank"
                      />
                    </Fragment>
                  );
                })
              : null}

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
