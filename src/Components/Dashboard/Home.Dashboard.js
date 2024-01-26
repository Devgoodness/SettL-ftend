import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import CreateTransaction from "../CreateTransaction";

const StyledCardContainerTop = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StyledCard = styled.div`
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0.1, 0.1, 0.1, 0.1);
  width: 8.7rem;
  height: 5rem;
  padding: 0.2rem 1.2rem;
`;

const StyledCardTxt = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
`;
const StyledCardContainerMid = styled.div`
  display: flex;
  gap: 3rem;
`;

const StyledWalletCard = styled.div`
  height: 14rem;
  background-color: #4db6ac;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  width: 14rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledWalletCardTxt = styled.p`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.05rem;
  color: #ffffff;
`;

const StyledBtnCreate = styled.button`
  border: none;
  background-color: #ffffff;
  border-radius: 0.2rem;
  width: 5rem;
  color: #4db6ac;
  margin: 0.5rem;
  padding: 0.2rem;
`;

const StyledCardOngoing = styled.div`
  height: 14rem;

  font-size: 1rem;
  font-weight: 400;
  width: 30rem;
`;

const StyledCardOngoingTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCardOngoingTopTxt = styled.h4`
  margin: 0 2rem 0 0;
`;

const StyledCardOngoingBtm = styled.div`
  height: 10rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 2px 2px rgba(0.1, 0.1, 0.1, 0.1);
  padding: 1rem 2rem 0 2rem;
  margin-top: 1rem;
`;

const StyledLine = styled.div`
  width: 25rem;
  height: 2px;
  background: #000000;
  opacity: 0.2;
  margin-bottom: 1rem;
`;
const StyledDetailsBtn = styled.button`
  background-color: #4db6ac;
  color: #ffffff;
  border-radius: 0.4rem;
  padding: 0.3rem 1rem;
  border: none;
`;

const StyledCardContainerBtm = styled.div`
  height: 8rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 2px 2px rgba(0.1, 0.1, 0.1, 0.1);
  padding: 1rem 2rem 0 2rem;
  margin-top: 1rem;
  width: 50vw;
`;

const StyledTh = styled.th`
  font-size: 0.7rem;
  text-align: left;
  font-weight: 400;
  padding-right: 2.2rem;
  padding-bottom: 0.5rem;
`;
const StyledTd = styled.td`
  font-size: 0.7rem;
  letter-spacing: -0.04rem;
  font-weight: 400;
  padding-right: 2.2rem;
  padding-bottom: 0.5rem;
`;

const Home = () => {
  const [newTransaction, setNewTransaction] = useState(false);
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <StyledCardContainerTop>
            <StyledCard>
              <StyledCardTxt>Total Transactions</StyledCardTxt>
              <p>15</p>
            </StyledCard>
            <StyledCard>
              <StyledCardTxt>Wallet Balance</StyledCardTxt>
              <p>NGN 5,500.99</p>
            </StyledCard>
            <StyledCard>
              <StyledCardTxt>Withdrawal</StyledCardTxt>
              <p>15</p>
            </StyledCard>
            <StyledCard>
              <StyledCardTxt>Deposit</StyledCardTxt>
              <p>NGN 5,500.99</p>
            </StyledCard>
          </StyledCardContainerTop>
          <StyledCardContainerMid>
            <StyledWalletCard>
              <StyledWalletCardTxt>Create New Transaction</StyledWalletCardTxt>
              <FontAwesomeIcon
                icon={faWallet}
                style={{ color: "white", fontSize: "8rem" }}
              />
              <StyledBtnCreate onClick={(e) => setNewTransaction(true)}>
                Create
              </StyledBtnCreate>
            </StyledWalletCard>
            <StyledCardOngoing>
              <StyledCardOngoingTop>
                <StyledCardOngoingTopTxt>
                  Ongoing Transactions:{" "}
                  <span style={{ color: "#4db6ac", fontSize: "0.8rem" }}>
                    3
                  </span>
                </StyledCardOngoingTopTxt>
                <div>
                  <FontAwesomeIcon
                    icon={faArrowCircleLeft}
                    style={{ marginRight: "0.5rem", color: "#4db6ac" }}
                  />
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    style={{ color: "#4db6ac" }}
                  />
                </div>
              </StyledCardOngoingTop>
              <StyledCardOngoingBtm>
                <StyledCardTxt
                  style={{
                    opacity: "0.5",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span> ID: 2341</span>
                  <button
                    style={{
                      background: "#1ab21a",
                      border: "none",
                      color: "#ffffff",
                      borderRadius: "0.2rem",
                      fontSize: "0.6rem",
                    }}
                  >
                    Pending
                  </button>
                </StyledCardTxt>
                <StyledCardTxt>New pair of shoes</StyledCardTxt>
                <StyledCardTxt>Counterparty: Footwarefairy</StyledCardTxt>
                <StyledLine></StyledLine>
                <StyledDetailsBtn>View Details</StyledDetailsBtn>
              </StyledCardOngoingBtm>
            </StyledCardOngoing>
          </StyledCardContainerMid>
          <h4>Recent Transactions</h4>
          <StyledCardContainerBtm>
            <table style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr
                  style={{ backgroundColor: "#4db6ac", borderRadius: "0.5rem" }}
                >
                  <StyledTh>Transaction ID</StyledTh>
                  <StyledTh>Title</StyledTh>
                  <StyledTh>Date Created</StyledTh>
                  <StyledTh>Date Due</StyledTh>
                  <StyledTh>Amount</StyledTh>
                  <StyledTh>Status</StyledTh>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <StyledTd style={{ textAlign: "center" }}>2341</StyledTd>
                  <StyledTd>New pair of shoes</StyledTd>
                  <StyledTd style={{ textAlign: "right" }}>23/1/2024</StyledTd>
                  <StyledTd style={{ textAlign: "right" }}>8/2/2024</StyledTd>
                  <StyledTd style={{ textAlign: "right" }}>N40,000</StyledTd>
                  <StyledTd>pending</StyledTd>
                </tr>
                <tr>
                  <StyledTd style={{ textAlign: "center" }}>2342</StyledTd>
                  <StyledTd>LV Shirt</StyledTd>
                  <StyledTd style={{ textAlign: "right" }}>20/1/2024</StyledTd>
                  <StyledTd style={{ textAlign: "right" }}>6/1/2024</StyledTd>
                  <StyledTd style={{ textAlign: "right" }}>N16,000</StyledTd>
                  <StyledTd>pending</StyledTd>
                </tr>
                <tr>
                  <StyledTd style={{ textAlign: "center" }}>2343</StyledTd>
                  <StyledTd>Man. Utd track suit</StyledTd>
                  <StyledTd style={{ textAlign: "right" }}>10/1/2024</StyledTd>
                  <StyledTd style={{ textAlign: "right" }}>23/1/2024</StyledTd>
                  <StyledTd style={{ textAlign: "right" }}>N25,000</StyledTd>
                  <StyledTd>complete</StyledTd>
                </tr>
                <tr>
                  <StyledTd style={{ textAlign: "center" }}>2344</StyledTd>
                  <StyledTd>Torbo P cap</StyledTd>
                  <StyledTd style={{ textAlign: "right" }}>10/1/2024</StyledTd>
                  <StyledTd style={{ textAlign: "right" }}>8/1/2024</StyledTd>
                  <StyledTd style={{ textAlign: "right" }}>N2,500</StyledTd>
                  <StyledTd>complete</StyledTd>
                </tr>
              </tbody>
            </table>
          </StyledCardContainerBtm>{" "}
        </div>
        <div>{newTransaction && <CreateTransaction />}</div>
      </div>
    </>
  );
};

export default Home;
