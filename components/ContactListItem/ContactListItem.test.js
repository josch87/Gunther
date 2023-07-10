import { render, screen } from "@testing-library/react";
import ContactListItem from "./ContactListItem";
import { contactTestData } from "@/data/TestData";

test("renders the full name of the contact", () => {
  render(<ContactListItem contact={contactTestData} />);

  const fullName = screen.getByRole("heading", {
    level: 2,
    name: /chandler muriel bing/i,
  });

  expect(fullName).toBeInTheDocument();
});

test("renders the profile picture of the contact with an alt text", () => {
  render(<ContactListItem contact={contactTestData} />);

  const profilePicture = screen.getByAltText(
    /profile picture of chandler muriel bing/i
  );

  expect(profilePicture).toBeInTheDocument();
});

test("renders a link to the detail page of the contact", () => {
  render(<ContactListItem contact={contactTestData} />);

  const link = screen.getByRole("link");

  expect(link).toBeInTheDocument();
});
