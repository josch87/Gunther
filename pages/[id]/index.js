import { materialDelete, materialEdit } from "@/assets/Icons8";
import BackLink from "@/components/BackLink/BackLink";
import ContactDetailsHeader from "@/components/ContactDetailsHeader/ContactDetailsHeader";
import ContactDetailsSection from "@/components/ContactDetailsSection/ContactDetailsSection";
import Scopebox from "@/components/Scopebox/Scopebox";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const ActionButtons = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  top: -13px;
  right: 13px;
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export default function ContactDetailsPage({ contacts, onDeleteContact }) {
  const router = useRouter();
  const { id } = router.query;

  const contact = contacts.find(
    (contact) =>
      contact.id === id &&
      (contact.dateDeleted === null || contact.dateDeleted === "")
  );

  if (id === undefined) {
    return <p>Loading contact details...</p>;
  }

  if (contact === undefined) {
    return <p>Contact with the ID &apos;{id}&apos; not found</p>;
  }

  return (
    <>
      <BackLink href="/">← All Contacts</BackLink>

      <Scopebox>
        <ActionButtons>
          <Link href={`/${id}/edit`} title="Edit contact">
            <Image
              src={materialEdit}
              alt="Edit contact"
              height={25}
              width={25}
            />
          </Link>
          <DeleteButton
            title="Delete contact"
            onClick={() => onDeleteContact(id)}
          >
            <Image
              src={materialDelete}
              alt="Delete contact"
              height={25}
              width={25}
            />
          </DeleteButton>
        </ActionButtons>

        <ContactDetailsHeader contact={contact} />
        <ContactDetailsSection contact={contact} />
      </Scopebox>
    </>
  );
}
