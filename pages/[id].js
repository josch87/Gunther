import { materialEmail, materialPhone } from "@/assets/Icons8";
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
            </ul>
          </>
        ) : (
          <div>Loading</div>
        )}
      </Scopebox>
    </>
  );
}
