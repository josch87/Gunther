import {
  contactsTestData,
  interactionsTestData,
  pastInteractionsTestData,
} from "@/data/TestData";
import UpcomingWidget from "./UpcomingWidget";
import { render, screen } from "@testing-library/react";
import {} from "@/data/TestData";

test("renders the heading 'Upcoming'", () => {
  render(
    <UpcomingWidget
      interactions={interactionsTestData}
      contacts={contactsTestData}
    />
  );

  const heading = screen.getByRole("heading", {
    level: 2,
    name: "Upcoming",
  });

  expect(heading).toBeInTheDocument();
});

test("renders three upcoming interactions", () => {
  render(
    <UpcomingWidget
      interactions={interactionsTestData}
      contacts={contactsTestData}
    />
  );

  const interactionItems = screen.getAllByRole("listitem");

  expect(interactionItems).toHaveLength(3);
});

test("does not render a component when there are no upcoming interactions", () => {
  render(
    <UpcomingWidget
      interactions={pastInteractionsTestData}
      contacts={contactsTestData}
    />
  );

  const interactionItems = screen.queryByRole("article");

  expect(interactionItems).not.toBeInTheDocument();
});
