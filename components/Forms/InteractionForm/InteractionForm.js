import { interactionsSampleData } from "@/data/SampleData";
import InteractionDetailsHeader from "../../InteractionDetailsHeader/InteractionDetailsHeader";
import {
  Heading,
  StickyContainer,
  StyledFieldset,
} from "./InteractionForm.styled";

export default function InteractionForm() {
  const interaction = interactionsSampleData[0]; //ONLY TEMPORARY!

  return (
    <>
      <StickyContainer>
        <InteractionDetailsHeader interaction={interaction} />
      </StickyContainer>

      <Heading id="form-heading">Create new interaction</Heading>
      <form aria-labelledby="form-heading">
        <StyledFieldset>
          <legend>Interaction Details</legend>
        </StyledFieldset>
      </form>
    </>
  );
}
