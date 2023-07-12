import ContactForm from "@/components/ContactForm/ContactForm";

export default function CreateNewContactPage({ onAddNewContact }) {
  return (
    <>
      <ContactForm onAddNewContact={onAddNewContact} />
    </>
  );
}
