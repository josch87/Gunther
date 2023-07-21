import InteractionDetailsHeader from "../../InteractionDetailsHeader/InteractionDetailsHeader";
import {
  Heading,
  StickyContainer,
  StyledFieldset,
} from "./InteractionForm.styled";
import { useState } from "react";
import SingleLineInput from "../SingleLineInput/SingleLineInput";
import { baseInteractionTypes } from "@/data/BaseData";

export default function InteractionForm({ interaction }) {
  const [currentInteraction, setCurrentInteraction] = useState(interaction);

  function handleUserInput(event, fieldName) {
    if (fieldName === "interactionType") {
      setCurrentInteraction({
        ...currentInteraction,
        type: event.value,
      });
    } else {
      setCurrentInteraction({
        ...currentInteraction,
        [fieldName]: event.target.value,
      });
    }
  }

  const selectableSortedInteractionTypes = baseInteractionTypes
    .filter((baseInteractionType) => baseInteractionType.isSelectable)
    .sort((a, b) => {
      const typeA = a.type.toUpperCase();
      const typeB = b.type.toUpperCase();
      if (typeA < typeB) {
        return -1;
      }
      if (typeA > typeB) {
        return 1;
      }
      return 0;
    })
    .map((baseInteractionType) => {
      if (baseInteractionType.isSelectable) {
        return {
          value: baseInteractionType.type,
          label: baseInteractionType.type,
        };
      }
    });

  return (
    <>
      <StickyContainer>
        <InteractionDetailsHeader interaction={currentInteraction} />
      </StickyContainer>

      <Heading id="form-heading">Create new interaction</Heading>
      <form aria-labelledby="form-heading">
        <StyledFieldset>
          <legend>Interaction Details</legend>
          <SingleLineInput
            type={"creatableSelect"}
            labelContent="Interaction (required)"
            id="interactionType"
            name="interactionType"
            options={selectableSortedInteractionTypes}
            // value={currentContact.firstName}
            onChange={(event) => handleUserInput(event, "interactionType")}
            required
          />
          <SingleLineInput
            type={"date"}
            labelContent="Date (required)"
            id="dateOfInteraction"
            name="dateOfInteraction"
            // value={
            //   currentContact.dateOfBirth
            //     ? currentContact.dateOfBirth.substring(0, 10)
            //     : ""
            // }
            onChange={(event) => handleUserInput(event, "dateOfInteraction")}
            required
          />
        </StyledFieldset>
      </form>
    </>
  );
}
