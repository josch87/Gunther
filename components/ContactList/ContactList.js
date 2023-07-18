import ContactListItem from "../ContactListItem/ContactListItem";

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}
