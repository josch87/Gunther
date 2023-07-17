import ContactList from "@/components/ContactList/ContactList";
import { styled } from "styled-components";

const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

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
      <Heading>Contacts</Heading>
      <ContactList contacts={contactsSortedByFirstName} />
    </div>
  );
}
