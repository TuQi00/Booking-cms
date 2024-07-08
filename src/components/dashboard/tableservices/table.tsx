import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Paper, IconButton
} from '@mui/material';
import TableSortLabel from '@mui/material/TableSortLabel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Service {
  id: number;
  name: string;
  type: string;
  duration: string;
  price: string;
  description: string;
}

interface ServiceTableProps {
  data: Service[];
  onEditClick: (service: Service) => void;
  onDeleteClick: (service: Service) => void;
}

const ServiceTable: React.FC<ServiceTableProps> = ({ data, onEditClick, onDeleteClick }) => {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<keyof Service>('name');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (property: keyof Service) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedRows = [...data].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) {
      return order === 'asc' ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={() => handleRequestSort('name')}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.duration}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEditClick(row)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDeleteClick(row)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default ServiceTable;
