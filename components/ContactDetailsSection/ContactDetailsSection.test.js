import { render, screen } from "@testing-library/react";
import { contactTestData } from "@/data/TestData";
import ContactDetailsSection from "./ContactDetailsSection";

test("renders all phone numbers", () => {
  render(<ContactDetailsSection contact={contactTestData} />);

  const phoneWork = screen.getByRole("link", {
    name: /^\+1 123 456 7890$/i,
  });
  expect(phoneWork).toBeInTheDocument();

  const phoneMobile = screen.getByRole("link", {
    name: /^\+1 987 654 3210$/i,
  });
  expect(phoneMobile).toBeInTheDocument();
});

test("renders all social media accounts", () => {
  render(<ContactDetailsSection contact={contactTestData} />);

  const instagram = screen.getByRole("link", {
    name: /^chandler_bingofficial$/i,
  });
  expect(instagram).toBeInTheDocument();

  const twitter = screen.getByRole("link", {
    name: /^chandler_bing$/i,
  });
  expect(twitter).toBeInTheDocument();
});

test("renders all social media icons", () => {
  render(<ContactDetailsSection contact={contactTestData} />);

  const instagramIcon = screen.getByRole("img", {
    name: /Instagram/i,
  });
  expect(instagramIcon).toBeInTheDocument();

  const twitterIcon = screen.getByRole("img", {
    name: /Twitter/i,
  });
  expect(twitterIcon).toBeInTheDocument();
});
