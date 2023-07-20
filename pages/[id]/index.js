import { materialEdit } from "@/assets/Icons8";
import BackLink from "@/components/BackLink/BackLink";
import ContactDetailsHeader from "@/components/ContactDetailsHeader/ContactDetailsHeader";
import ContactDetailsSection from "@/components/ContactDetailsSection/ContactDetailsSection";
import Scopebox from "@/components/Scopebox/Scopebox";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledLink = styled(Link)`
  position: absolute;
  top: -13px;
  right: 13px;
`;

export default function ContactDetailsPage({ contacts }) {
  const router = useRouter();
  const { id } = router.query;

  const contact = contacts.find((contact) => contact.id === id);

  if (id === undefined) {
    return <p>Loading contact details...</p>;
  }

  if (contact === undefined) {
    return <div>Contact with the ID &apos;{id}&apos; not found</div>;
  }

  return (
    <>
      <BackLink href="/">← All Contacts</BackLink>

      <Scopebox>
        <StyledLink href={`/${id}/edit`} title="Edit contact">
          <Image src={materialEdit} alt="Edit contact" height={25} width={25} />
        </StyledLink>
        <ContactDetailsHeader contact={contact} />
        <ContactDetailsSection contact={contact} />
      </Scopebox>
    </>
  );
}
