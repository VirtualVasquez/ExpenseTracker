import React from 'react';

const ExpenseForm = props => {
    return(
        <form>
                  
        <h2>Add Expense</h2>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            name="date" 
            type="date"
            className="form-control" 
            id="inputDate" 
            aria-describedby="dateHelp"
            value={props.date}
            onChange={props.handleInputChange}
            required
          >
          </input>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input 
            name="description"
            type="text" 
            className="form-control" 
            id="inputDescription" 
            placeholder="Description"
            value={props.description}
            onChange={props.handleInputChange}
            required
          >
          </input>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input 
            name="location"
            type="text" 
            className="form-control" 
            id="inputLocation" 
            placeholder="Location"
            value={props.location}
            onChange={props.handleInputChange}
            required
          >
          </input>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input 
            name="amount"
            type="number"
            min="0.01" 
            step="0.01"
            className="form-control" 
            id="inputAmount" 
            placeholder="Amount"
            value={props.amount}
            onChange={props.handleInputChange}
            required
          >
          </input>
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={props.handleSubmit}
        >
            Submit
        </button>

      </form>
    )
}

export default ExpenseForm;