import ContactList from "@/components/ContactList/ContactList";
import Heading from "@/components/Heading/Heading";

export default function HomePage({ contacts }) {
  const contactsSortedByFirstName = contacts.slice().sort((a, b) => {
    const fullNameA =
      a.firstName?.toLowerCase() +
      a.middleName?.toLowerCase() +
      a.lastName?.toLowerCase();
    const fullNameB =
      b.firstName?.toLowerCase() +
      b.middleName?.toLowerCase() +
      b.lastName?.toLowerCase();

    if (fullNameA < fullNameB) {
      return -1;
    }
    if (fullNameA > fullNameB) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <Heading level={1}>Contacts</Heading>
      <ContactList contacts={contactsSortedByFirstName} />
    </div>
  );
}
