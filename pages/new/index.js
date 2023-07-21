import ContactForm from "@/components/ContactForm/ContactForm";
import { emptyContact } from "@/data/SampleData";

export default function CreateNewContactPage({ onAddNewContact }) {
  return (
    <ContactForm
      contact={emptyContact}
      onSubmitForm={onAddNewContact}
      headingContent="Create new contact"
    />
  );
}
