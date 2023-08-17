import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


export default function StudentTable({ data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [expandedRow, setExpandedRow] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowExpand = (index) => {
    setExpandedRow((prevExpanded) => (prevExpanded === index ? null : index));
  };

  return (
    <TableContainer component={Paper} style={{ maxWidth: '800px' , border:'0' }}>
      <Table sx={{ backgroundColor: '#f0f0f0', color: 'black' }} aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Roll no</TableCell>
            <TableCell align="right">Branch</TableCell>
            <TableCell align="right">Proctor</TableCell>
            <TableCell align="right">Student Email id</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
            <React.Fragment key={index}>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.student_name}
                </TableCell>
                <TableCell align="right">{user.Roll_number}</TableCell>
                <TableCell align="right">{user.student_branch.branch_name}</TableCell>
                <TableCell align="right">{user.Proctor_Abbreviation.faculty_name}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => handleRowExpand(index)}
                  >
                    {expandedRow === index ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                  <Collapse in={expandedRow === index} timeout="auto" unmountOnExit>
                    {/* Additional content to show when the row is expanded */}
                    <List>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Typography variant="h6" component="div">
                              Student details
                            </Typography>
                          }
                          secondary={
                            <Typography variant="h8" component="pre">
                              {`Student Name: ${user.student_name}\n` +
                              `Roll Number: ${user.Roll_number}\n` +
                              `Branch: ${user.student_branch.branch_name}\n` +
                              `Student Email ID: ${user.email}\n`+
                              `Student Contact number: ${user.Student_contact_no}\n`}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Typography variant="h6" component="div">
                              Proctor details
                            </Typography>
                          }
                          secondary={
                            <Typography variant="h8"component="pre">
                              {`Proctor: ${user.Proctor_Abbreviation.faculty_name}\n`+
                              `Department: ${user.Proctor_Abbreviation.dept}\n` +
                              `Proctor Code: ${user.Proctor_Abbreviation.employee_code}\n` +
                              `Proctor Email: ${user.Proctor_Abbreviation.faculty_email}\n` +
                              `Proctor Abbreviation: ${user.Proctor_Abbreviation.employee_abbreviation}\n`+
                              `Experience: ${user.Proctor_Abbreviation.experience} years\n` +
                              `Post: ${user.Proctor_Abbreviation.post}\n`}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={
                            <Typography variant="h6" component="div">
                              Parents details
                            </Typography>
                          }
                          secondary={
                            <Typography variant="h8"component="pre">
                              {`Parents Contact number: ${user.Parents_contact_no}\n`+
                              `Parents Email id: ${user.Parent_email_id}`}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
