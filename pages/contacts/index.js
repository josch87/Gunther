import ContactList from "@/components/ContactList/ContactList";
import CreateDataInvitation from "@/components/CreateDataInvitation/CreateDataInvitation";
import Heading from "@/components/Heading/Heading";
import DefaultHead from "@/components/Layout/DefaultHead/DefaultHead";
import { getFullSortName } from "@/utils/getContactDetails";

export default function Contacts({ contacts, onImportDemoContact }) {
  const activeContacts = contacts.filter(
    (contact) => contact.dateDeleted === null || contact.dateDeleted === ""
  );

  const contactsSortedByFirstName = activeContacts.slice().sort((a, b) => {
    const nameA = getFullSortName(a);
    const nameB = getFullSortName(b);

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <DefaultHead pageTitle="Contacts" />
      <Heading level={1}>Contacts</Heading>
      {activeContacts.length === 0 ? (
        <CreateDataInvitation
          entity="contact"
          createEntity="/new"
          onImport={onImportDemoContact}
        />
      ) : (
        <ContactList contacts={contactsSortedByFirstName} />
      )}
    </>
  );
}
