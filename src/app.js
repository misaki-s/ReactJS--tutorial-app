import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
// import './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 5000 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500}))
// store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


//babel src/app.js --out-file=public/script/app.js --presets=env,react
//parseInt('abc', base number) = parse a string argument and returns an integer of the specified radix
//isNaN

// ------------------------  React Router ------------------------------
// historyApiFallback is used when recognizing the main html page to render to all 4 pages.
// Switch is used to render unique API request that doesn't match those above Route Request

const jsx = (
    <Provider store={store}>
       <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

