import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { deleteExpense, fetchExpenses } from "../actions/expenseActions";
import moment from "moment";
import { FETCH_EXPENSE_RESET } from "../constants/expenseConstants";
import AddExpenseDialog from "../components/forms/AddExpenseDialog";

const useStyles = makeStyles({
  root: {
    padding: "15px 15px",
  },
});
const ExpenseScreen = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, error, expenses } = useSelector((state) => state.expenses);
  const {
    loading: loadingExpenseDelete,
    error: errorExpenseDelete,
    success: successExpenseDelete,
  } = useSelector((state) => state.expenseDelete);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch, successExpenseDelete]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MainLayout>
      <Typography variant="div">
        <TableContainer component={Paper}>
          <Typography variant="div">
            <Typography className={classes.root} variant="h5">
              Expenses
            </Typography>
            <Typography className={classes.root} variant="div">
              <Button
                onClick={() => {
                  navigate("/expense");
                  dispatch({ type: FETCH_EXPENSE_RESET });
                  handleClickOpen();
                }}
                startIcon={<AddIcon />}
                color="secondary"
                variant="contained"
              >
                Add
              </Button>
            </Typography>
          </Typography>
          {(loading || loadingExpenseDelete) && <CircularProgress />}
          {error && (
            <Alert style={{ width: "80%", margin: "0 auto" }} severity="error">
              {error}
            </Alert>
          )}
          {errorExpenseDelete && (
            <Alert style={{ width: "80%", margin: "0 auto" }} severity="error">
              {errorExpenseDelete}
            </Alert>
          )}
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Source</TableCell>
                <TableCell>Date of Expense</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell size="small" colSpan={2} align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses?.map((expense) => (
                <TableRow key={expense?._id}>
                  <TableCell>{expense?.category?.expenseCategory}</TableCell>
                  <TableCell>
                    {moment().format(expense?.expenseDate, "MM-DD-YYYY")}
                  </TableCell>
                  <TableCell>{expense?.expenseAmount}</TableCell>
                  <TableCell size="small" align="right">
                    <Button
                      onClick={() => {
                        navigate(`/expense/${expense._id}`);
                        handleClickOpen();
                      }}
                    >
                      <EditIcon />
                    </Button>
                  </TableCell>
                  <TableCell size="small" align="left">
                    <Button
                      onClick={() => {
                        console.log(expense._id);
                        dispatch(deleteExpense(expense._id));
                      }}
                    >
                      <DeleteIcon></DeleteIcon>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <AddExpenseDialog
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
        ></AddExpenseDialog>
      </Typography>
    </MainLayout>
  );
};

export default ExpenseScreen;
