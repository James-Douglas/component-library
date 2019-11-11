import React from 'react';
import { render } from '@testing-library/react';
import Table from '../Table/Table.component';
import TableBody from '../TableBody/TableBody.component';
import TableRow from '../TableRow/TableRow.component';
import TableHead from '../TableHead/TableHead.component';
import TableFooter from '../TableFooter/TableFooter.component';
import TableCell from '../TableCell/TableCell.component';

describe('Table', () => {
  it('renders correctly Table', () => {
    const { container } = render(<Table />);
    const table = container.getElementsByTagName('table')[0];
    expect(table).toBeInTheDocument();
    expect(table).toHaveClass('root-table');
  });
  it('renders correctly Table tbody', () => {
    const { container } = render(
      <Table size="small">
        <TableBody />
      </Table>,
    );
    const tbody = container.getElementsByTagName('tbody')[0];
    expect(tbody).toBeInTheDocument();
  });
  it('renders correctly Table tr and td', () => {
    const { container } = render(
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell align="left" padding="none">Heading</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    const row = container.getElementsByTagName('tr')[0];
    const cell = container.getElementsByTagName('td')[0];
    expect(cell).toHaveClass('text-left');
    expect(row).toBeInTheDocument();
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveClass('padding-none');
  });
  it('renders correctly Table thead and th', () => {
    const { container } = render(
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left" padding="checkbox">Heading</TableCell>
          </TableRow>
        </TableHead>
      </Table>,
    );
    const tablehead = container.getElementsByTagName('thead')[0];
    const tableth = container.getElementsByTagName('th')[0];
    expect(tablehead).toBeInTheDocument();
    expect(tableth).toBeInTheDocument();
    expect(tableth).toHaveClass('padding-checkbox');
  });
  it('renders correctly Table tfoot', () => {
    const { container } = render(
      <Table size="small">
        <TableFooter>
          <TableRow />
        </TableFooter>
      </Table>,
    );
    const tablefoot = container.getElementsByTagName('tfoot')[0];
    expect(tablefoot).toBeInTheDocument();
  });

  it('renders correctly Table with predefined component', () => {
    const { container } = render(
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell component="th">Heading</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    const tableth = container.getElementsByTagName('th')[0];
    expect(tableth).toBeInTheDocument();
  });
  it('renders correctly Table with predefined component ', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th">Heading</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    const tableth = container.getElementsByTagName('th')[0];
    expect(tableth).toBeInTheDocument();
    expect(tableth).toHaveClass('table-padding-medium');
  });
  it('renders correctly with another structure html', () => {
    const { container } = render(
      <Table component="dl">
        <TableBody component="dt">Coffee</TableBody>
        <TableBody component="dt">Black hot drink</TableBody>
      </Table>,
    );
    const tabledl = container.getElementsByTagName('dl')[0];
    const tabledt = container.getElementsByTagName('dt');
    const gettabledt = tabledt[0];
    expect(tabledl).toBeInTheDocument();
    expect(gettabledt).toBeInTheDocument();
    expect(tabledt.length).toBe(2);
  });
  it('renders correctly Table tr with hover', () => {
    const { container } = render(
      <Table size="small">
        <TableBody>
          <TableRow hover>
            <TableCell component="th">Heading</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    );
    const row = container.getElementsByTagName('tr')[0];
    const tableth = container.getElementsByTagName('th')[0];
    expect(row).toHaveClass('root-table-row-hover');
    expect(row).toHaveClass('root-table-row');
    expect(row).toBeInTheDocument();
    expect(tableth).toHaveClass('table-padding-small');
  });

  it('renders correctly with diffirent structure html', () => {
    const { container, getByText } = render(
      <Table component="div">
        <TableBody component="dl">
          <TableRow component="dt">Milk</TableRow>
          <TableRow component="span">Cof</TableRow>
        </TableBody>
      </Table>,
    );
    const tabledl = container.getElementsByTagName('dl')[0];
    const tabledt = container.getElementsByTagName('dt');
    const tablespan = container.getElementsByTagName('span')[0];
    const gettabledt = tabledt[0];
    expect(tabledl).toBeInTheDocument();
    expect(gettabledt).toBeInTheDocument();
    expect(getByText('Cof')).toBeInTheDocument();
    expect(tablespan).toBeInTheDocument();
    expect(tabledt.length).toBe(1);
  });
  it('renders correctly with diffirent structure html for thead', () => {
    const { container, getByText } = render(
      <Table component="dl">
        <TableHead component="dt">Coffee</TableHead>
        <TableHead component="span">Black hot drink</TableHead>
      </Table>,
    );
    const tabledl = container.getElementsByTagName('dl')[0];
    const tabledt = container.getElementsByTagName('dt');
    expect(tabledl).toBeInTheDocument();
    expect(tabledt.length).toBe(1);
    expect(getByText('Black hot drink')).toBeInTheDocument();
  });
  it('renders correctly with diffirent structure', () => {
    const { container, getByText } = render(
      <Table>
        <TableHead><TableRow><TableCell>White cold drink</TableCell></TableRow></TableHead>
      </Table>,
    );
    const tablehead = container.getElementsByTagName('thead')[0];
    expect(tablehead).toBeInTheDocument();
    expect(tablehead).toHaveClass('root-table-head');
    expect(getByText('White cold drink')).toBeInTheDocument();
  });
});
