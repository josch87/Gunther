import {
  materialDelete,
  materialDeleteWhite,
  materialEdit,
} from "@/assets/Icons8";
import BackLink from "@/components/BackLink/BackLink";
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";
import ContactDetailsHeader from "@/components/ContactDetailsHeader/ContactDetailsHeader";
import ContactDetailsSection from "@/components/ContactDetailsSection/ContactDetailsSection";
import DefaultHead from "@/components/Layout/DefaultHead/DefaultHead";
import Scopebox from "@/components/Scopebox/Scopebox";
import { getFullName } from "@/utils/getContactDetails";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
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

  function confirmDeletion() {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ConfirmModal
            onClose={onClose}
            onConfirm={() => onDeleteContact(id)}
            title="Warning"
            checkboxLabel="I confirm that I want to delete this contact."
            confirmationButtonContent="Delete contact"
            confirmationButtonIcon={materialDeleteWhite}
          />
        );
      },
    });
  }

  return (
    <>
      <DefaultHead pageTitle={`Contact Details of ${getFullName(contact)}`} />
      <BackLink href="/">All Contacts</BackLink>

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
          <DeleteButton title="Delete contact" onClick={confirmDeletion}>
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
