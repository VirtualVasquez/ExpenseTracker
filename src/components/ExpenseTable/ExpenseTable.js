import React from 'react';

const Table = props => {
    return(
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Location</th>
            <th scope="col">Amount</th>
            <th scope="col"><span>&nbsp;&nbsp;</span></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(props.expenses) ? props.expenses.map(function(expense, index){
            return(
                <tr key={index}>
                    <td>{expense.date}</td>
                    <td>{expense.description}</td>
                    <td>{expense.location}</td>
                    <td>${expense.amount}</td>
                    <td>
                      <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() => props.removeExpense(index)}
                        >
                          X
                        </button>
                    </td>
                </tr>
            )
            }) : null
          }
        </tbody>
      </table>
    )

}

export default Table;