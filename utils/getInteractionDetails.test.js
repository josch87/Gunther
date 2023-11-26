import { contactsTestData, interactionsTestData } from "@/data/TestData";
import {
  getActiveInteractions,
  getParticipant,
  getSortedActiveFutureInteractions,
} from "./getInteractionDetails";

test("get a participant", () => {
  const participant = getParticipant(contactsTestData, "3");
  expect(participant.firstName).toBe("Rachel");
  expect(participant.lastName).toBe("Green");
});

test("get only active interactions", () => {
  const activeInteractions = getActiveInteractions(interactionsTestData, 3);
  expect(
    activeInteractions.every((interaction) => interaction.dateDeleted === "")
  ).toBe(true);
});

test("get three sortedActiveFutureInteractions", () => {
  const threeInteractions = getSortedActiveFutureInteractions(
    interactionsTestData,
    3
  );
  expect(threeInteractions).toHaveLength(3);
});

test("get only active future sortedActiveFutureInteractions", () => {
  const activeFutureInteractions = getSortedActiveFutureInteractions(
    interactionsTestData,
    5
  );
  expect(
    activeFutureInteractions.every(
      (interaction) => interaction.dateDeleted === ""
    )
  ).toBe(true);

  let today = new Date();
  today = today.toISOString();

  expect(
    activeFutureInteractions.every(
      (interaction) => interaction.dateOfInteraction >= today
    )
  ).toBe(true);
});

test("get sorted sortedActiveFutureInteractions", () => {
  const sortedInteractions = getSortedActiveFutureInteractions(
    interactionsTestData,
    3
  );

  expect(sortedInteractions[0].id).toBe("5");
  expect(sortedInteractions[1].id).toBe("4");
  expect(sortedInteractions[2].id).toBe("3");
});
