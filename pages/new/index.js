import ContactForm from "@/components/Forms/ContactForm/ContactForm";
import { emptyContact } from "@/data/SampleData";

export default function CreateNewContactPage({ onAddNewContact }) {
  return <ContactForm contact={emptyContact} onSubmitForm={onAddNewContact} />;
}
