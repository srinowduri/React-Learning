import axios from 'axios';

const API = 'http://localhost:2000/api/expenses';


export const getExpenses = () => {
    let url = API;

    return axios.get(url)
        .then(respense => {
            return respense.data
        });
}

export const addNewExpense = (expense) => {
    let url = API;
    return axios.post(url, expense);
}

export const getExpenseById = (id) => {
    let url = 'http://localhost:2000/api/expenses/' + id;

    return axios.get(url)
        .then(res => {
            return res.data;
        })
}

export const editExpense = (expense) => {
    let url = API;
    return axios.put(url, expense);
}

export const deleteExpense = (id) => {
    let url = 'http://localhost:2000/api/expenses/' + id;
    return axios.delete(url);
}