import { ColumnOne, ColumnTwo, Container, StyledLabel } from "./City.styled";

export default function City({
  id,
  name,
  required = false,
  zipValue,
  zipOnChange,
  cityValue,
  cityOnChange,
}) {
  return (
    <Container>
      <ColumnOne>
        <StyledLabel htmlFor={`${id}ZipCode`}>Zip code</StyledLabel>
        <input
          type="text"
          id={`${id}ZipCode`}
          name={`${name}ZipCode`}
          size="5"
          required={required}
          value={zipValue}
          onChange={zipOnChange}
        />
      </ColumnOne>
      <ColumnTwo>
        <StyledLabel htmlFor={`${id}City`}>City</StyledLabel>
        <input
          type="text"
          id={`${id}City`}
          name={`${name}City`}
          size="10"
          required={required}
          value={cityValue}
          onChange={cityOnChange}
        />
      </ColumnTwo>
    </Container>
  );
}
