import React from 'react';
import {merge} from'lodash';

class TicketForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.tickets;
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      soldTicket: []
    });
  }
  handleQuantity(e) {
    let qty = e.currentTarget.value.split(' ');
    let newState = this.state.soldTicket;
    let idx = null;
    newState = newState.filter( tick => {
      return !tick.includes(qty[0]);
    });
    newState.push(qty);
    this.setState({
      soldTicket: newState
    });
  }

  handleSubmit(e) {
    this.state.soldTicket.forEach(ticket => {
      let tickId = parseInt(ticket[0]);
      let quant = parseInt(ticket[1]);
      let tick = this.state[tickId];
      tick.quantity = quant;
      this.setState({
        [tickId]: tick
      });
    });
    
    debugger

  }
  render() {
    debugger
    let tickets = [];
    Object.values(this.props.tickets).forEach( ticket => {
      let price = ticket.price == 0 ? ticket.ticket_type : ticket.price;
      tickets.push(
        <div key={ticket.id} className={`ticket-info ${ticket.id}`}>
          <h2>{ticket.name}</h2>
          <p>{price}</p>
          <select 
            className="ticket-info-quantity"
            onChange={this.handleQuantity}
            key={ticket.id}
          >
            <option value={`${ticket.id} 0`}>0</option>
            <option value={`${ticket.id} 1`}>1</option>
            <option value={`${ticket.id} 2`}>2</option>
            <option value={`${ticket.id} 3`}>3</option>
            <option value={`${ticket.id} 4`}>4</option>
            <option value={`${ticket.id} 5`}>5</option>
          </select>
        </div>
      )
    })
    return(
      <form onSubmit={this.handleSubmit}>
        {tickets}
        <input type="submit" value="Checkout"/>
      </form>
    )
    
  }
}

export default TicketForm;