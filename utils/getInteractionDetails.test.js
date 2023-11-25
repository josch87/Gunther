import { interactionsTestData } from "@/data/TestData";
import { getSortedActiveFutureInteractions } from "./getInteractionDetails";

test("get three interactions", () => {
  const threeInteractions = getSortedActiveFutureInteractions(
    interactionsTestData,
    3
  );
  expect(threeInteractions).toHaveLength(3);
});

test("get only active interactions", () => {
  const activeInteractions = getSortedActiveFutureInteractions(
    interactionsTestData,
    3
  );
  expect(
    activeInteractions.every((interaction) => interaction.dateDeleted === "")
  ).toBe(true);
});

test.skip("get only future interactions", () => {
  const futureInteractions = getSortedActiveFutureInteractions(
    interactionsTestData,
    3
  );
  const today = new Date();
  console.log(today);
  console.log(futureInteractions);

  expect(
    futureInteractions.every(
      (interaction) => interaction.dateOfInteraction >= today
    )
  ).toBe(true);
});
