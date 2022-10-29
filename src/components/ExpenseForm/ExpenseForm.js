import React from 'react';

const ExpenseForm = props => {
    return(
        <form>
                  
        <h2>Add Expense</h2>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            name="currentDate" 
            type="date"
            className="form-control" 
            id="inputDate" 
            aria-describedby="dateHelp"
            value={props.currentDate}
            onChange={props.handleInputChange}
            required
          >
          </input>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input 
            name="currentDescription"
            type="text" 
            className="form-control" 
            id="inputDescription" 
            placeholder="Description"
            value={props.currentDescription}
            onChange={props.handleInputChange}
            required
          >
          </input>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input 
            name="currentLocation"
            type="text" 
            className="form-control" 
            id="inputLocation" 
            placeholder="Location"
            value={props.currentLocation}
            onChange={props.handleInputChange}
            required
          >
          </input>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input 
            name="currentAmount"
            type="number"
            min="0.01" 
            step="0.01"
            className="form-control" 
            id="inputAmount" 
            placeholder="Amount"
            value={props.currentAmount}
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