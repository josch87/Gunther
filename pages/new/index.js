import ContactForm from "@/components/Forms/ContactForm/ContactForm";
import DefaultHead from "@/components/Layout/Head/Head";
import { emptyContact } from "@/data/SampleData";

export default function CreateNewContactPage({ onAddNewContact }) {
  return (
    <>
      <DefaultHead pageTitle="New Contact" />
      <ContactForm contact={emptyContact} onSubmitForm={onAddNewContact} />;
    </>
  );
}
