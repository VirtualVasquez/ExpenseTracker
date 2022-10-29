import './App.scss';
import React from 'react';
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import Table from './components/ExpenseTable/ExpenseTable'

// function App() {
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      expenses:[
        {
          date: "2021-01-01",
          description: "A",
          location: "One",
          amount: 1,
        },
        {
          date: "2021-01-01",
          description: "B",
          location: "Two",
          amount: 2,
        },
        {
          date: "2021-01-01",
          description: "C",
          location: "Three",
          amount: 3,
        },
      ],
      currentDate: "",
      currentDescription: "",
      currentLocation: "",
      currentAmount: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logExpense = this.logExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
      
  }

  handleSubmit(event){
    event.preventDefault();
    this.logExpense();
  }

  logExpense(){
    let currentExpense = {
      date: this.state.currentDate,
      description: this.state.currentDescription,
      location: this.state.currentLocation,
      amount: this.state.currentAmount
    }
    for(const[key, value] of Object.entries(currentExpense)){
      if(!value){
        alert("Make sure all fields are filled out");
        return;
      }
    }
    this.state.expenses.push(currentExpense);
    this.setState({
      currentDate: "",
      currentDescription: "",
      currentLocation: "",
      currentAmount: "",
    })
  }

  removeExpense = (index) => {
    const reducedArr = [...this.state.expenses];

    reducedArr.splice(index, 1);

    this.setState({expenses: reducedArr})
  }

  render(){
    return (
      <div className="App">

        <header className="App-header">
          <h1>Expense Manager</h1>
        </header>

        <div className="container">
          
          <div className="row">

            <div className="col col-md-4 col-sm-12 form-column">
              <ExpenseForm
                currentDate={this.state.currentDate}
                currentDescription={this.state.currentDescription}
                currentLocation={this.state.currentLocation}
                currentAmount={this.state.currentAmount}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}              
              />
            </div>

            <div className="col col-md-8 col-sm-12">
              <Table
                expenses={this.state.expenses}
                removeExpense={this.removeExpense}
              />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
    
}

export default App;
