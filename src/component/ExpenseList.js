// Higher Order Component

import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
       <h1>Expense List</h1>
       {
           props.expenses.length === 0 ? (
               <p>No expenses</p>
           ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense}/>;
                })
            )
       }
    </div>
);

// mapStateToProps maps the current state to its child component
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);


// connect(What are you going to dispatch)(Dispatch Item)
// Purpose of { Provider } =  to provide the store to its child component