import './App.scss';
import React from 'react';
import Table from './components/ExpenseTable/ExpenseTable'

// function App() {
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      expenses:[
        {
          date:"07/07/2007",
          description: "Gambling",
          location: "Hard Rock Casino",
          amount: "$777",
        }
      ]
    }
  }

  render(){
    return (
      <div className="App">

        <header className="App-header">
          <h1>Expense Manager</h1>
        </header>

        <body className="container">
          
          <div className="row">

            <div className="col col-md-4 col-sm-12 form-column">
              <form>
                  
                <h2>Add Expense</h2>
                <div className="form-group">
                  <label for="date">Date</label>
                  <input type="date" className="form-control" id="inputDate" aria-describedby="dateHelp" placeholder="Enter Date">
                  </input>
                </div>

                <div className="form-group">
                  <label for="description">Description</label>
                  <input type="text" className="form-control" id="inputDescription" placeholder="Description">
                  </input>
                </div>

                <div className="form-group">
                  <label for="location">Location</label>
                  <input type="text" className="form-control" id="inputLocation" placeholder="location">
                  </input>
                </div>

                <div className="form-group">
                  <label for="amount">Amount</label>
                  <input type="number" className="form-control" id="inputAmount" placeholder="Amount">
                  </input>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>

              </form>
            </div>

            <div className="col col-md-8 col-sm-12">

              <div>
                <p>Total Amount Spent: $1,000,000</p>
              </div>
              <Table
                expenses={this.state.expenses}
              />



            </div>
          </div>
        </body>
      </div>
    );
  }
    
}

export default App;
