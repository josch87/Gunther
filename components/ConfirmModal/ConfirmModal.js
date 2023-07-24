import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

// export default function ConfirmModal() {
//   return confirmAlert({
//     customUI: ({ onClose }) => {
//       return (
//         <div className="custom-ui">
//           <h1>Are you sure?</h1>
//           <p>You want to delete this file?</p>
//           <button onClick={onClose}>No</button>
//           <button
//             onClick={() => {
//               this.handleClickDelete();
//               onClose();
//             }}
//           >
//             Yes, Delete it!
//           </button>
//         </div>
//       );
//     },
//   });
// }

import styled from "styled-components";

const ConfirmModalWrapper = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  width: 50%;
  min-width: 300px;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  border: 1px solid lightgray;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Body = styled.p`
  font-size: 18px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  font-size: 16px;
`;

export const ConfirmModal = ({ onClose }) => {
  return (
    <ConfirmModalWrapper>
      <Title>Warning</Title>
      <Body>Möchten Sie diese Datei löschen?</Body>
      <ButtonWrapper>
        <Button onClick={onClose}>Nein</Button>
        <Button
          onClick={() => {
            this.handleClickDelete();
            onClose();
          }}
        >
          Ja, löschen!
        </Button>
      </ButtonWrapper>
    </ConfirmModalWrapper>
  );
};

// export default function ConfirmModalTest() {
//   return confirmAlert({
//     customUI: ConfirmModal,
//   });
// }
