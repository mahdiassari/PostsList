import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  Paper,
} from "@material-ui/core";
import { TblRow } from "./MaterialUiTableStyles";
import TablePaginationActions from "./TablePaginationActions/TablePaginationActions";
import StatementHandler from "../../Util/StatementHandler";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function MaterialUiTable({ postsState }) {
  const history = useHistory();
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const rows = postsState.posts.map((row) => {
    return { id: row.id, userId: row.userId, title: row.title, body: row.body };
  });

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const postDetailsPageHandler = (row) => {
    history.push(`/materialuitable/posts/${row.id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TblRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="left">UserId</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">Body</StyledTableCell>
          </TblRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => {
            return (
              <TblRow
                key={row.id}
                onClick={() => {
                  postDetailsPageHandler(row);
                }}
              >
                <TableCell style={{ width: 10 }} scope="row">
                  {row.id}
                </TableCell>
                <TableCell style={{ width: 10 }} align="left">
                  {row.userId}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {StatementHandler(row.title, 25)}
                </TableCell>
                <TableCell style={{ width: 500 }} align="left">
                  {StatementHandler(row.body, 100)}
                </TableCell>
              </TblRow>
            );
          })}

          {emptyRows > 0 && (
            <TblRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TblRow>
          )}
        </TableBody>
        <TableFooter>
          <TblRow className={classes.tablePagination}>
            <TablePagination
              rowsPerPageOptions={[10, 15]}
              colSpan={4}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TblRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
