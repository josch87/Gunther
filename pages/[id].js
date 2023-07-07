import BackLink from "@/components/BackLink/BackLink";
import ContactDetailsHeader from "@/components/ContactDetailsHeader/ContactDetailsHeader";
import Scopebox from "@/components/Scopebox/Scopebox";
import { useRouter } from "next/router";

export default function ContactDetailsPage({ contacts }) {
  const router = useRouter();
  const { id } = router.query;

  const contact = contacts.find((contact) => contact.id === id);

  return (
    <>
      <BackLink href={"/"}>← All Contacts</BackLink>
      <Scopebox>
        {/* {contact.id} */}
        <ContactDetailsHeader contact={contact} />
      </Scopebox>
    </>
  );
}
