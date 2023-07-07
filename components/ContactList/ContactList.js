import ContactListItem from "../ContactListItem/ContactListItem";
import { StyledLink } from "./ContactList.styled";

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <StyledLink
            href={`/${contact.id}`}
            key={contact.id}
            title={`Show contact details`}
          >
            <ContactListItem contact={contact} />
          </StyledLink>
        );
      })}
    </ul>
  );
}
