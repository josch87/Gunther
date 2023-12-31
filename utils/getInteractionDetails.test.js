import { contactsTestData, interactionsTestData } from "@/data/TestData";
import {
  getActiveInteractions,
  getParticipant,
  getSortedActiveFutureInteractions,
} from "./getInteractionDetails";

test("getParticipant reutnrs correct contact based on ID", () => {
  const participant = getParticipant(contactsTestData, "3");
  expect(participant.firstName).toBe("Rachel");
  expect(participant.lastName).toBe("Green");
});

test("getActiveInteractions returns only active interactions", () => {
  const activeInteractions = getActiveInteractions(interactionsTestData, 3);
  expect(
    activeInteractions.every((interaction) => interaction.dateDeleted === "")
  ).toBe(true);
});

test("getSortedActiveFutureInteractions returns three interactions", () => {
  const threeInteractions = getSortedActiveFutureInteractions(
    interactionsTestData,
    3
  );
  expect(threeInteractions).toHaveLength(3);
});

test("getSortedActiveFutureInteractions returns only active interactions", () => {
  const activeInteractions = getSortedActiveFutureInteractions(
    interactionsTestData,
    5
  );
  expect(
    activeInteractions.every((interaction) => interaction.dateDeleted === "")
  ).toBe(true);
});

test("getSortedActiveFutureInteractions returns only future interactions", () => {
  const futureInteractions = getSortedActiveFutureInteractions(
    interactionsTestData,
    5
  );

  let today = new Date();
  today = today.toISOString();

  expect(
    futureInteractions.every(
      (interaction) => interaction.dateOfInteraction >= today
    )
  ).toBe(true);
});

test("getSortedActiveFutureInteractions returns interactions sorted by date", () => {
  const sortedInteractions = getSortedActiveFutureInteractions(
    interactionsTestData,
    3
  );

  expect(sortedInteractions[0].id).toBe("5");
  expect(sortedInteractions[1].id).toBe("4");
  expect(sortedInteractions[2].id).toBe("3");
});

test("getSortedActiveFutureInteractions returns empty array when input is null", () => {
  const activeInteractions = getSortedActiveFutureInteractions(null, 5);
  expect(activeInteractions).toEqual([]);
});
