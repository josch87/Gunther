import ContactList from "@/components/ContactList/ContactList";
import ContactListItem from "@/components/ContactListItem/ContactListItem";

export default function HomePage() {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactList />
      <ContactListItem />
    </div>
  );
}
