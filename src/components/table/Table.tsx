import React from 'react';

type TableProps = {
  children: React.ReactNode;
  headers: string[];
};

export const Table = ({ children, headers }: TableProps) => {
return (
<table>
<thead>
<tr>
{headers.map((header) => (
<th key={header}>{header}</th>
))}
</tr>
</thead>
<tbody>{children}</tbody>
</table>
);
};