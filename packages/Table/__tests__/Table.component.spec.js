import React from 'react';
import { render } from '../../../testUtils';
import Table from '../Table/Table.component';
import 'jest-styled-components';
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
    expect(table).toHaveStyleRule('display', 'table');
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
    expect(cell).toHaveStyleRule('text-align', 'left');
    expect(row).toBeInTheDocument();
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveStyleRule('padding', 'none');
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
    expect(tableth).toHaveStyleRule('padding', '0.8rem');
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
    expect(tableth).toHaveStyleRule('padding', '0.8rem');
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
  it('renders correctly with div instead of table', () => {
    const { container } = render(
      <Table component="div" />,
    );
    const div = container.getElementsByTagName('div')[0];
    const divElement = container.getElementsByTagName('div');
    expect(div).toBeInTheDocument();
    expect(divElement.length).toBe(1);
  });
  it('renders correctly with div instead of table and thead', () => {
    const { container } = render(
      <Table component="div">
        <TableHead component="div" />
      </Table>,
    );
    const div = container.getElementsByTagName('div')[0];
    const divElement = container.getElementsByTagName('div');
    expect(div).toBeInTheDocument();
    expect(divElement.length).toBe(2);
  });
  it('renders correctly with component tags', () => {
    const { container } = render(
      <Table component="table">
        <TableHead component="thead">
          <TableRow hover>
            <TableCell component="th">Heading</TableCell>
          </TableRow>
        </TableHead>
      </Table>,
    );
    const table = container.getElementsByTagName('table')[0];
    const thead = container.getElementsByTagName('thead')[0];
    expect(table).toBeInTheDocument();
    expect(thead).toBeInTheDocument();
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
    expect(row).toHaveStyleRule('display', 'table-row');
    expect(row).toBeInTheDocument();
    expect(tableth).toHaveStyleRule('padding', '0.4rem');
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
    expect(tablehead).toHaveStyleRule('display', 'table-row-group');
    expect(getByText('White cold drink')).toBeInTheDocument();
  });
});
