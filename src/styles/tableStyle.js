import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Table = styled.table`
  margin-top: 5em;
  border-collapse: collapse;
  border-spacing: 0;
  margin-right: auto;
  margin-left: auto;
`;

export const Th = styled.th`
  padding: 0.1em 0.1em;
  text-transform: capitalize;
`;

export const TdLeft = styled.td`
  position: relative;
  left: 4em;
  padding: 0.1em 0.1em;
  font-size: 1.5em;
`;

export const TdRight = styled.td`
  position: relative;
  right: -1em;
  padding: 0.1em 0.1em;
  font-size: 1.5em;
`;

export const Thead = styled.thead`
  ${'' /* background: transparent; */}
  border: 2px solid #F57873;
  color: #F57873;
  font-size: 1.5em;
`;