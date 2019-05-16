import React from 'react';
import {merge} from'lodash';
import Swal from'sweetalert2';

class TicketForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.tickets;
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      soldTicket: [],
      quantChange: false,
      totalTickets: 0,
    });

  }
  handleQuantity(e) {
    document.getElementsByClassName("ticket-form-btn")[0].removeAttribute("disabled");
    let qty = e.currentTarget.value.split(' ');
    let newState = this.state.soldTicket;
    let idx = null;
    let total = 0;
    newState = newState.filter( tick => {
      return !tick.includes(qty[0]);
    });
    newState.push(qty);
    newState.forEach(ticket => {
      total += parseInt(ticket[1]);
    });
    this.setState({

      soldTicket: newState,
      quantChange: true,
      totalTickets: total
    });
  }

  handleSubmit(e) {
    // return e => {
      e.preventDefault();
      // e.stopPropogation();
      this.state.soldTicket.forEach(ticket => {
        let tickId = parseInt(ticket[0]);
        let quant = parseInt(ticket[1]);
        // let tick = this.state[tickId];
        // tick.quantity = quant;
        let tick = this.props.tickets[tickId];
        tick.quantity = quant;
        this.props.sellTicket(tick);
        // this.setState({
        //   [tickId]: tick
        // });
      });
      
      this.props.modalClose();
      setTimeout(() => {
        Swal.fire({
          type: 'success',
          title: 'Enjoy the event!',
          timer: 1500,
          showConfirmButton: false,
        });
  
      },600);
     
  

    // }

  }
  render() {
    let tickets = [];
    let active;
    if(this.state.soldTicket){
      active = this.state.totalTickets != 0 ? 'active-ticket-btn' : '';
    }

    Object.values(this.props.tickets).forEach( ticket => {
      let price;
      switch(ticket.ticket_type){
        case 'Free':
          price = 'Free';
          break;
        case 'Donation':
          price = <div id='ticket-form-donate-price'>
            <span>$</span>
            <input
              type="number" 
              placeholder="Donate"
              step="0.01"
              min="0"

            />
          </div>

          break;
        default:
          price =`$ ${ticket.price}`;
      }
      // let price = ticket.price == 0 ? ticket.ticket_type : ticket.price;
      let qtyOption;
      if(ticket.quantity <= 0){
        qtyOption = <p className="ticket-info-quantity-sold-out">Sold Out</p>
      } else if(ticket.quantity < 5 && ticket.quantity > 0) {
        let options = [];
        for(let i = 0; i <= ticket.quantity; i++ ){
          options.push(<option key={i} value={`${ticket.id} ${i}`}>{i}</option>);
        }
        qtyOption = <select 
        className="ticket-info-quantity"
        onChange={this.handleQuantity}
        key={ticket.id}
        >
          {options}
        </select>
      } else {
        qtyOption = <select 
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
      }
      tickets.push(
        <div key={ticket.id} className={`ticket-info ${ticket.id}`}>
          <div>
            <h2>{ticket.name}</h2>
            <div>{price}</div>
          </div>
          {qtyOption}
        </div>
      )
    });
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          {tickets}
        </div>
        <footer>
          <p>QTY: {this.state.totalTickets}</p>
          <input id={active} className={`ticket-form-btn`} type="submit" value="Checkout" disabled/>

        </footer>
          
      </form>
    )
    
  }
}

export default TicketForm;