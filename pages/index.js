import ContactList from "@/components/ContactList/ContactList";
import Heading from "@/components/Heading/Heading";
import DefaultHead from "@/components/Layout/Head/Head";
import { getFullSortName } from "@/utils/getContactDetails";

export default function HomePage({ contacts }) {
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
    <div>
      <DefaultHead pageTitle="Contacts" />
      <Heading level={1}>Contacts</Heading>
      <ContactList contacts={contactsSortedByFirstName} />
    </div>
  );
}
