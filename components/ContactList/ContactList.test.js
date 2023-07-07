import { render, screen } from "@testing-library/react";
import ContactList from "./ContactList";
import { contactsTestData } from "@/data/TestData";

test("renders all contacts in a list", () => {
  render(<ContactList contacts={contactsTestData} />);

  const allContactListItems = screen.getAllByRole("listitem");

  expect(allContactListItems).toHaveLength(4);
});
