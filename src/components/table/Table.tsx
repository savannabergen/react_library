import styled from 'styled-components';
import { TableProps } from './table.types';

const StyledTableEnabled = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTableDisabled = styled.table`
  border-collapse: collapse;
  width: 100%;
  opacity: 0.5;
  pointer-events: none;
`;

const StyledTheadEnabled = styled.thead``;
const StyledTheadDisabled = styled.thead`opacity: 0.5;`;

const StyledTrEnabled = styled.tr``;
const StyledTrDisabled = styled.tr`opacity: 0.5;`;

const StyledThEnabled = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
`;

const StyledThDisabled = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  opacity: 0.5;
`;

const StyledTbodyEnabled = styled.tbody``;
const StyledTbodyDisabled = styled.tbody`opacity: 0.5;`;

const StyledTfootEnabled = styled.tfoot``;
const StyledTfootDisabled = styled.tfoot`opacity: 0.5;`;

export const Table = ({
  children,
  headers,
  footer,
  disabled,
}: TableProps) => {
  const TableComponent = disabled ? StyledTableDisabled : StyledTableEnabled;
  const TheadComponent = disabled ? StyledTheadDisabled : StyledTheadEnabled;
  const TrComponent = disabled ? StyledTrDisabled : StyledTrEnabled;
  const ThComponent = disabled ? StyledThDisabled : StyledThEnabled;
  const TbodyComponent = disabled ? StyledTbodyDisabled : StyledTbodyEnabled;
  const TfootComponent = disabled ? StyledTfootDisabled : StyledTfootEnabled;

  return (
    <TableComponent>
      <TheadComponent>
        <TrComponent>
          {headers.map((header) => (
            <ThComponent key={header}>{header}</ThComponent>
          ))}
        </TrComponent>
      </TheadComponent>
      <TbodyComponent>{children}</TbodyComponent>
      {footer && (
        <TfootComponent>
          <TrComponent>
            {footer.map((item) => (
              <ThComponent key={item}>{item}</ThComponent>
            ))}
          </TrComponent>
        </TfootComponent>
      )}
    </TableComponent>
  );
};
