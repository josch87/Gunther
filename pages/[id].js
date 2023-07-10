import {
  materialAddress,
  materialEmail,
  materialExternalLink,
  materialInstagram,
  materialName,
  materialNotes,
  materialPhone,
} from "@/assets/Icons8";
import BackLink from "@/components/BackLink/BackLink";
import ContactDetailsHeader from "@/components/ContactDetailsHeader/ContactDetailsHeader";
import ContactDetailsItem from "@/components/ContactDetailsItem/ContactDetailsItem";
import Scopebox from "@/components/Scopebox/Scopebox";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function ContactDetailsPage({ contacts }) {
  const router = useRouter();
  const { id } = router.query;

  const contact = contacts.find((contact) => contact.id === id);

  function getSocialMediaIcon(platform) {
    if (platform === "Instagram") {
      return materialInstagram;
    }

    return materialExternalLink;
  }

  function getSocialMediaHyperlink(platform, username) {
    if (platform === "Instagram") {
      return `https://www.instagram.com/${username}/`;
    }
    if (platform === "Twitter") {
      return `https://twitter.com/${username}`;
    }
    if (platform === "Facebook") {
      return `https://www.facebook.com/${username}`;
    }
    return null;
  }

  function getAddress(address) {
    const { street, zipCode, city, country } = address;
    let finalAddress = "";

    if (street) {
      finalAddress += `${street}\n`;
    }

    if (zipCode && city) {
      finalAddress += `${zipCode} ${city}\n`;
    } else if (zipCode) {
      finalAddress += `${zipCode}\n`;
    } else if (city) {
      finalAddress += `${city}\n`;
    }

    if (country) {
      finalAddress += country;
    }

    return (
      <>
        {finalAddress.split("\n").map((line, index) => (
          <Fragment key={index}>
            {line}
            <br />
          </Fragment>
        ))}
      </>
    );

    return finalAddress.trim();
  }

  function getGoogleMapsLink(address) {
    const { street, zipCode, city, country } = address;
    let encodedAddress = "";

    if (street) {
      encodedAddress += encodeURIComponent(street);
    }

    if (zipCode) {
      if (encodedAddress) {
        encodedAddress += ", ";
      }
      encodedAddress += encodeURIComponent(zipCode);
    }

    if (city) {
      if (encodedAddress) {
        encodedAddress += ", ";
      }
      encodedAddress += encodeURIComponent(city);
    }

    if (country) {
      if (encodedAddress) {
        encodedAddress += ", ";
      }
      encodedAddress += encodeURIComponent(country);
    }

    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    return googleMapsLink;
  }

  return (
    <>
      <BackLink href={"/"}>← All Contacts</BackLink>
      <Scopebox>
        {contact ? (
          <>
            <ContactDetailsHeader contact={contact} />

            <h2>Contact Details</h2>

            <ul>
              {contact.nickName ? (
                <ContactDetailsItem
                  icon={materialName}
                  value={contact.nickName}
                  type="Nickname"
                />
              ) : null}
              {contact.email ? (
                <ContactDetailsItem
                  icon={materialEmail}
                  value={contact.email.value}
                  type={contact.email.type}
                  href={`mailto:${contact.email.value}`}
                  target="_blank"
                />
              ) : null}

              {contact.phone
                ? contact.phone.map((phone, index) => (
                    <Fragment key={index}>
                      <ContactDetailsItem
                        icon={materialPhone}
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
                <>
                  <ContactDetailsItem
                    icon={materialNotes}
                    value={contact.notes}
                  />
                </>
              ) : null}
            </ul>
          </>
        ) : (
          <div>Loading</div>
        )}
      </Scopebox>
    </>
  );
}
