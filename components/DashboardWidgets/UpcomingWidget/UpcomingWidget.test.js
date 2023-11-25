import {
  contactsTestData,
  interactionsTestData,
  threeFutureInteractionsTestData,
} from "@/data/TestData";
import UpcomingWidget from "./UpcomingWidget";
import { render, screen } from "@testing-library/react";

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
      interactions={threeFutureInteractionsTestData}
      contacts={contactsTestData}
    />
  );

  const interactionItems = screen.getAllByRole("listitem");

  expect(interactionItems).toHaveLength(3);
});
