import useLocalStorageState from "use-local-storage-state";
import { contactsSampleData } from "@/data/SampleData";
import ContactListItem from "../ContactListItem/ContactListItem";
import { useImmerLocalStorageState } from "@/hooks/useImmerLocalStorageState";

export default function ContactList() {
  const [contacts, updateContacts] = useImmerLocalStorageState("contacts", {
    defaultValue: contactsSampleData,
  });

  const contactsSortedByFirstName = contacts.slice().sort((a, b) => {
    const fullNameA =
      a.firstName.toLowerCase() +
      a.middleName.toLowerCase() +
      a.lastName.toLowerCase();
    const fullNameB =
      b.firstName.toLowerCase() +
      b.middleName.toLowerCase() +
      b.lastName.toLowerCase();

    if (fullNameA < fullNameB) {
      return -1;
    }
    if (fullNameA > fullNameB) {
      return 1;
    }
    return 0;
  });

  return (
    <ul>
      {contactsSortedByFirstName.map((contact) => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}
