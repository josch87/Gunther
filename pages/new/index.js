import ContactForm from "@/components/ContactForm/ContactForm";

export default function CreateNewContact({ onAddNewContact }) {
  return (
    <>
      <ContactForm onAddNewContact={onAddNewContact} />
    </>
  );
}
