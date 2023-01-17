import styled from "styled-components";

export const Container = styled.header`
  height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;
