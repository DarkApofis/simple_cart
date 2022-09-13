import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  padding: 16px;
  border-bottom: 1px solid gainsboro;
  font-weight: bold;
  font-size: 24px;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 0.75rem;
  flex: 1;
  padding: 1rem;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`;

export const CardTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

export const CardDesc = styled.p`
  color: gray;
`;

export const Aside = styled.aside`
  position: sticky;
  bottom: 0;
  margin: auto;
  padding-bottom: 16px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddRemoveButtons = styled.button`
  width: 80px;
`;

export const Button = styled.button`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Footer = styled.footer`
  padding: 16px;
  border-top: 1px solid gainsboro;
  text-align: center;
  color: gray;
`;
