import {
  materialEmail,
  materialExternalLink,
  materialInstagram,
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

  return (
    <>
      <BackLink href={"/"}>← All Contacts</BackLink>
      <Scopebox>
        {contact ? (
          <>
            <ContactDetailsHeader contact={contact} />
            <h2>Contact Details</h2>
            <ul>
              {contact.email ? (
                <ContactDetailsItem
                  icon={materialEmail}
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
                        value={phone.value}
                        type={phone.type}
                        href={`tel:${phone.value}`}
                      />
                    </Fragment>
                  ))
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
                          target={"_blank"}
                        />
                      </Fragment>
                    );
                  })
                : null}
            </ul>
          </>
        ) : (
          <div>Loading</div>
        )}
      </Scopebox>
    </>
  );
}
