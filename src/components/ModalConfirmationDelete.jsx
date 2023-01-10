import styled from "styled-components";

export default function ModalConfirmationDelete({
  modalLoading,
  setModalConfirmation,
  handleCardRemoval,
}) {
  return (
    <ModalConfirmationDeleteScreen>
      <div className="confirmation-box">
        <h2>Are you sure you want to delete this post?</h2>
        <div className="confirmation-buttons">
          <button
            onClick={(e) => setModalConfirmation(false)}
            className="return-button"
          >
            No, go back
          </button>
          <button onClick={handleCardRemoval} className="delete-button">
            Yes, delete it
          </button>
        </div>
      </div>
      {modalLoading && <p className="loading-p">Loading...</p>}
    </ModalConfirmationDeleteScreen>
  );
}

const ModalConfirmationDeleteScreen = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .confirmation-box {
    width: 597px;
    height: 262px;
    background-color: #333333;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    h2 {
      width: 340px;
      font-size: 34px;
      font-weight: 700;
      text-align: center;
      font-family: "Lato", sans-serif;
      color: white;
    }
    .confirmation-buttons {
      display: flex;
      width: 60%;
      justify-content: space-around;
      button {
        border-radius: 5px;
        width: 134px;
        height: 37px;
        border: 0;
        font-size: 18px;
        font-weight: 700;
      }
      .return-button {
        background-color: #ffffff;
        color: #1877f2;
      }
      .delete-button {
        background-color: #1877f2;
        color: white;
      }
    }
  }
  .loading-p {
    margin-top: 20px;
    color: black;
    font-family: "Oswald", sans-serif;
    font-size: 28px;
  }
`;
