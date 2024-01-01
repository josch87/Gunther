import {
  materialDelete,
  materialDeleteWhite,
  materialEdit,
} from "@/assets/Icons8";
import BackLink from "@/components/BackLink/BackLink";
import ConfirmModal from "@/components/ConfirmModal/ConfirmModal";
import ContactDetailsHeader from "@/components/ContactDetailsHeader/ContactDetailsHeader";
import ContactDetailsSection from "@/components/ContactDetailsSection/ContactDetailsSection";
import InteractionList from "@/components/InteractionList/InteractionList";
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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default function ContactDetailsPage({
  contacts,
  onDeleteContact,
  interactions,
}) {
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

  const sortedContactInteractions = interactions
    .filter((interaction) => interaction.participants.includes(contact.id))
    .sort((a, b) => {
      const dateA = a.dateOfInteraction;
      const dateB = b.dateOfInteraction;
      if (dateA < dateB) {
        return 1;
      }
      if (dateA > dateB) {
        return -1;
      }
      return 0;
    });

  const sortedContactInteractionsToDisplay = sortedContactInteractions.slice(
    0,
    5
  );

  return (
    <>
      <DefaultHead pageTitle={`Contact Details of ${getFullName(contact)}`} />
      <BackLink href="/contacts">All Contacts</BackLink>

      <FlexContainer>
        <section>
          <Scopebox>
            <ActionButtons>
              <Link href={`/contacts/${id}/edit`} title="Edit contact">
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
        </section>

        <section>
          {sortedContactInteractionsToDisplay.length > 0 ? (
            <Scopebox heading="Interactions">
              <InteractionList
                contacts={contacts}
                interactions={sortedContactInteractionsToDisplay}
              />
            </Scopebox>
          ) : null}
        </section>
      </FlexContainer>
    </>
  );
}
