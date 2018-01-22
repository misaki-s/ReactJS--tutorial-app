import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
     // onSubmit is added to add the form instead of just the id
    onSubmit = (expense) => {
        // editExpense takes 2 arguments : id and expense
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <ExpenseForm 
                   expense={this.props.expense} 
                   onSubmit={this.onSubmit} 
                   />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
};

// state = access to the current state.
// props = access to the particular props
const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);