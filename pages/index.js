import ContactList from "@/components/ContactList/ContactList";

export default function HomePage({ contacts }) {
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
    <div>
      <h1>Contacts</h1>
      <ContactList contacts={contactsSortedByFirstName} />
    </div>
  );
}
