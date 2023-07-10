import { Fragment } from "react";
import ContactListItem from "../ContactListItem/ContactListItem";

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <Fragment key={contact.id}>
            <ContactListItem contact={contact} />
          </Fragment>
        );
      })}
    </ul>
  );
}
