import { render, screen } from "@testing-library/react";
import { contactTestData } from "@/data/TestData";
import ContactDetailsSection from "./ContactDetailsSection";

test("renders all social media accounts", () => {
  render(<ContactDetailsSection contact={contactTestData} />);

  const instagram = screen.getByRole("link", {
    name: /chandler_bingofficial/i,
  });

  expect(instagram).toBeInTheDocument();
});
