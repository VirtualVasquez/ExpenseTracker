import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Manager</h1>
      </header>
      <body className="container">
        <div className="row row-one">
          <form className="col col-md-5">
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
          <div className="col col-md-7" id="totalColumn">
            <div>
            <p>Total Amount Spent:</p>
            <p id="totalCost">$1,000,000</p>
            </div>

          </div>
        </div>
        <div className="row table-container">
        <table class="table table-bordered">
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
            <tr>
              <th scope="row">mm/dd/yyyy</th>
              <td>Description</td>
              <td>Location</td>
              <td>($) Amount</td>
              <td><button type="button" class="btn btn-danger">X</button></td>
            </tr>
          </tbody>
        </table>
        </div>
      </body>
    </div>
  );
}

export default App;
