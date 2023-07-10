import {
  materialAddress,
  materialEmail,
  materialName,
  materialNotes,
  materialPhone,
} from "@/assets/Icons8";
import BackLink from "@/components/BackLink/BackLink";
import ContactDetailsSection from "@/components/ContactDetails";
import ContactDetailsHeader from "@/components/ContactDetailsHeader/ContactDetailsHeader";
import ContactDetailsItem from "@/components/ContactDetailsItem/ContactDetailsItem";
import Scopebox from "@/components/Scopebox/Scopebox";
import {
  getAddress,
  getGoogleMapsLink,
  getSocialMediaHyperlink,
  getSocialMediaIcon,
} from "@/hooks/getContactDetails";
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
        <ContactDetailsSection contact={contact} />
      </Scopebox>
    </>
  );
}
