import React from "react";
import DatePicker from "react-datepicker";
import { withRouter } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { merge } from "lodash";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.updateTicket = this.updateTicket.bind(this);
    this.addTicket = this.addTicket.bind(this);
    this.displayTickets = this.displayTickets.bind(this);
    this.fillTickets = this.fillTickets.bind(this);
    this.removeTicket = this.removeTicket.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  addTicket(field) {
    debugger;
    return e => {
      e.preventDefault();
      e.stopPropagation();
      let ticketType = {};
      switch (field) {
        case "Free":
          ticketType[this.state.ticket_num] = 0;
          break;
        case "Paid":
          ticketType[this.state.ticket_num] = 1;
          break;
        case "Donation":
          ticketType[this.state.ticket_num] = 2;
          break;
        default:
          ticketType = 0;
      }
      let tick = {
        name: "",
        quantity: 0,
        ticket_type: field,
        price: 0,
        event_id: null
      };
      debugger;
      this.setState({
        ticket_num: this.state.ticket_num + 1,
        ticket_type: merge({}, this.state.ticket_type, { ticketType }),
        tickets: merge([], this.state.tickets, {
          [this.state.ticket_num]: tick
        })
      });
    };
  }

  removeTicket(id, idx) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      let newTicketNum = this.state.ticket_num - 1;
      let newTicketType = this.state.ticket_type;
      delete newTicketType.ticketType[idx];
      let newTickets = this.state.tickets;
      newTickets.splice(idx, 1);
      debugger;
      // newTicketType = newTicketType.filter( tick => {
      //   debugger
      //   return !tick.includes(idx);
      // });
      this.setState({
        ticket_num: this.state.ticket_num - 1,
        ticket_type: newTicketType,
        tickets: newTickets
      });
      // if(this.props.formType === "Edit Event" && this.props.tickets[id]) {
      //   this.props.deleteTicket(id);
      // }
    };
  }
  displayTickets(i) {
    let tickType;
    let tick = this.state.tickets[i];
    let tickPrice = tick.price == 0 ? "" : tick.price;
    let tickQuant = tick.quantity == 0 ? "" : tick.quantity;
    let removeBtn = null;
    let readOnly = false;
    let dollarSign = '';
    if (this.props.formType === "Edit Event") {
      readOnly = this.props.tickets[tick.id] ? true : false;
      dollarSign = 'dollar-disabled';
    }
    let disabledBtn = readOnly ? "event-form-disabled" : "";
    if (
      this.props.formType === "Create Event" ||
      !this.props.tickets[tick.id]
    ) {
      removeBtn = (
        <button
          className="delete-ticket-btn"
          onClick={this.removeTicket(tick.id, i)}
        >
          <i className="fas fa-times" />
        </button>
      );
    } else {
      removeBtn = (
        <button
          id="delete-ticket-btn-disabled"
          onClick={this.removeTicket(tick.id, i)}
          disabled
        >
          <i className="fas fa-times" />
        </button>
      );
    }
    debugger;
    switch (this.state.ticket_type.ticketType[i]) {
      case 0:
        tickType = (
          <div id="event-form-ticket-price">
            <input
              type="text"
              value="Free"
              readOnly
              className="event-form-disabled"
            />
          </div>
        );
        break;
      case 2:
        tickType = (
          <div id="event-form-ticket-price">
            <input
              type="text"
              value="Donation"
              readOnly
              className="event-form-disabled"
            />
          </div>
        );
        break;
      default:
        tickType = (
          <div id="event-form-ticket-price">
            <span id={dollarSign}>$</span>
            <input
              className={disabledBtn}
              readOnly={readOnly}
              type="number"
              placeholder="100"
              step="0.01"
              min="0"
              value={`${tickPrice}`}
              onChange={this.updateTicket("price", i)}
            />
          </div>
        );
    }

    return (
      <div key={i} className="event-form-tickets-index">
        <input
          className={disabledBtn}
          readOnly={readOnly}
          type="text"
          placeholder="Early Bird, General, VIP..."
          onChange={this.updateTicket("name", i)}
          value={`${tick.name}`}
        />
        <input
          className={disabledBtn}
          readOnly={readOnly}
          type="number"
          placeholder="100"
          min="0"
          onChange={this.updateTicket("quantity", i)}
          value={`${tickQuant}`}
        />

        {tickType}
        {removeBtn}
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    let eventId;
    // CREATE EVENT THEN SET ID THEN CREATE TICKET
    if (this.props.formType === "Create Event") {
      this.props.receiveTickets(this.state.tickets);
      this.props
        .createEvent(this.state)
        .then(payload => {
          eventId = payload.event.id;
          Object.values(this.props.tickets).forEach(ticket => {
            ticket["event_id"] = payload.event.id;
            this.props.createTicket(ticket);
          });
        })
        .then(() => this.props.history.push(`/event/${eventId}`));
    } else {
      // this.props.receiveTickets(this.state.tickets);
      // this.state.tickets.forEach(ticket => {
      //   debugger
      //   this.props.deleteTicket(ticket.id);
      // });
      debugger;
      this.props
        .updateEvent(this.state)
        .then(payload => {
          Object.values(this.state.tickets).forEach(ticket => {
            if (!ticket.id) {
              ticket["event_id"] = payload.event.id;
              this.props.createTicket(ticket);
            }
          });
        })
        .then(() => this.props.history.push(`/event/${this.state.id}`));
    }
  }
  // () => this.props.history.push(`/`)
  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }
  updateTicket(field, idx) {
    return e => {
      debugger;
      let newState = merge([], this.state.tickets);
      if (field === "price" || field === "quantity") {
        newState[idx][field] = e.currentTarget.value
          ? parseInt(e.currentTarget.value)
          : "";
      } else {
        newState[idx][field] = e.currentTarget.value;
      }
      this.setState({
        tickets: newState
      });
    };
  }

  handleCategory(e) {
    e.preventDefault();
    debugger
    this.setState({category_id: parseInt(e.currentTarget.value)});
  }

  formatDate(date) {
    let fullDate = date.toDateString().split(" ");
    let time = date.toTimeString().split(" ")[0];
    let [dayOfWeek, month, day, year] = fullDate;
    //Format is flipped for backend: y/m/d instead of m/d/y
    return [dayOfWeek, year, month, day, time];
  }
  handleChangeStart(date) {
    let formattedDate = this.formatDate(date);
    this.setState({
      startDate: date,
      start_date: `${formattedDate[0]} ${formattedDate[1]} ${
        formattedDate[2]
      } ${formattedDate[3]} ${formattedDate[4]}`
    });
  }

  handleChangeEnd(date) {
    let formattedDate = this.formatDate(date);
    this.setState({
      endDate: date,
      end_date: `${formattedDate[0]} ${formattedDate[1]} ${formattedDate[2]} ${
        formattedDate[3]
      } ${formattedDate[4]}`
    });
  }

  fillTickets(tickets) {
    debugger;
    if (this.props.formType === "Edit Event") {
      let editTickets = {
        ticket_num: 0,
        ticket_type: {},
        tickets: []
      };
      if (tickets) {
        debugger;
        tickets.forEach(tick => {
          debugger;
          let ticketType = {};
          switch (tick.ticket_type) {
            case "Free":
              ticketType[editTickets.ticket_num] = 0;
              break;
            case "Paid":
              ticketType[editTickets.ticket_num] = 1;
              break;
            case "Donation":
              ticketType[editTickets.ticket_num] = 2;
              break;
            default:
              ticketType = 0;
          }
          editTickets.tickets.push(tick);
          editTickets.ticket_type = merge({}, editTickets.ticket_type, {
            ticketType
          });
          editTickets.ticket_num += 1;
          // debugger
          // this.addTicket(tick.ticket_type, tick);
          // debugger
        });
      }
      this.setState({
        ticket_num: editTickets.ticket_num,
        ticket_type: editTickets.ticket_type,
        tickets: editTickets.tickets
      });
    }
  }
  componentDidMount() {
    let formattedDate = this.formatDate(new Date());
    //default states for dates
    let tickets = this.props.tickets ? Object.values(this.props.tickets) : null;
    debugger;

    this.setState(
      {
        image_url:
          "https://cnet1.cbsistatic.com/img/xBshnVs6E1cL8i_shQt9OoAPVus=/1600x900/2018/06/13/792de549-6718-438c-8359-4e4989606bc5/fortnite-booth-e3-2018-7646.jpg",
        category_id: 1,
        // focusedInput: null,
        startDate: new Date(),
        start_date: `${formattedDate[0]} ${formattedDate[1]} ${
          formattedDate[2]
        } ${formattedDate[3]} ${formattedDate[4]}`,
        endDate: new Date(),
        end_date: `${formattedDate[0]} ${formattedDate[1]} ${
          formattedDate[2]
        } ${formattedDate[3]} ${formattedDate[4]}`,
        ticket_num: 0,
        ticket_type: {},
        tickets: []
      },
      () => this.fillTickets(tickets)
      //   () => {

      // if(tickets){
      //   debugger
      //   tickets.forEach(tick => {
      //     debugger
      //     let ticketType = {};
      //     switch(tick.ticket_type) {
      //       case 'Free':
      //         ticketType[this.state.ticket_num] = 0;
      //         break;
      //       case 'Paid':
      //         ticketType[this.state.ticket_num] = 1;
      //         break;
      //       case 'Donation':
      //         ticketType[this.state.ticket_num] = 2;
      //         break;
      //       default: ticketType = 0;
      //     }
      //     this.setState({
      //       ticket_num: this.state.ticket_num + 1,
      //       ticket_type:  merge({}, this.state.ticket_type, { ticketType }),
      //       tickets: merge([], this.state.tickets, {[this.state.ticket_num]: tick})
      //     });
      //     // debugger
      //     // return that.addTicket(tick.ticket_type, tick);
      //     // debugger
      //   });
      // }
      // }
    );
  }

  render() {
    let tickets = [];
    for (let i = 0; i < this.state.ticket_num; i++) {
      tickets[i] = this.displayTickets(i);
    }
    debugger;
    return (
      <div className="event-form-container">
        <form className="event-form" onSubmit={this.handleSubmit}>
          <div className="event-form-header">
            <h1>{this.props.formType}</h1>
            <button onSubmit={this.handleSubmit}> Publish </button>
          </div>
          <div className="event-form-header-bottom" />

          <div className="event-form-detail-header">
            <div>
              <i> 1 </i>
            </div>
            <div>
              <h1>Event Details</h1>
            </div>
          </div>
          <div className="event-form-detail-cont">
            <div className="event-form-detail">
              <label htmlFor="event-form-input">Event Title</label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                className={`event-form-input`}
                required
              />
            </div>
            <div className="event-form-detail">
              <label htmlFor="event-form-input">Location</label>
              <input
                type="text"
                value={this.state.address}
                onChange={this.update("address")}
                className={`event-form-input`}
                required
              />
            </div>
            <div className="event-form-detail-date">
              <div>
                <label htmlFor="start-date-picker">Starts</label>
                <div className="start-date-picker">
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChangeStart}
                    showTimeSelect
                    dateFormat="MMMM d yyyy h:mm aa"
                    timeCaption="Start"
                  />
                  {/* {this.renderErrors('Start date')} */}
                </div>
              </div>
              <div>
                <label htmlFor="end-date-picker">Ends</label>
                <div className="end-date-picker">
                  <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    showTimeSelect
                    dateFormat="MMMM d yyyy h:mm aa"
                    timeCaption="End"
                  />
                  {/* {this.renderErrors('End date')} */}
                </div>
              </div>
            </div>
            <div className="event-form-detail">
              <label htmlFor="">Event Image</label>
              {/* <input type="file" id='input-image-file' ref={inputImage} style={{display:none}} /> */}
              {/* <button onClick={ () => inputImage.current.click }>
                Upload Image
              </button> */}
              <button> Upload Image </button>
            </div>
            <div className="event-form-detail">
              <label htmlFor="event-form-textarea">Event Description</label>
              <textarea
                className={`event-form-textarea`}
                value={this.state.description}
                onChange={this.update("description")}
                required
              />
            </div>
          </div>

          <div className="event-form-detail-header">
            <div>
              <i> 2 </i>
            </div>
            <div>
              <h1>Create Tickets</h1>
            </div>
          </div>
          <div className="event-form-detail">
            <div className="event-form-ticket-container">
              <div className="event-form-ticket-header">
                <span>Ticket Name</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Actions</span>
              </div>
              <div>{tickets}</div>
              <div className="event-form-ticket-type">
                <button
                  className="event-form-ticket-type-button"
                  onClick={this.addTicket("Free")}
                >
                  Free
                </button>
                <button
                  className="event-form-ticket-type-button"
                  onClick={this.addTicket("Paid")}
                >
                  Paid
                </button>
                <button
                  className="event-form-ticket-type-button"
                  onClick={this.addTicket("Donation")}
                >
                  Donation
                </button>
              </div>
            </div>
          </div>

          <div className="event-form-detail-header">
            <div>
              <i> 3 </i>
            </div>
            <div>
              <h1>Additional Settings</h1>
            </div>
          </div>
          <div className="event-form-detail">
            <div className="event-form-category-select">
              <select className="event-form-category-dropdown" onChange={this.handleCategory}>
                <option value="1"> Gaming </option>
                <option value="2"> Performing & Visual Arts </option>
                <option value="3"> Business & Professional </option>
                <option value="4"> Music </option>
                <option value="5"> Travel & Outdoor </option>
                <option value="6"> Science & Technology </option>
                <option value="7"> Sports </option>
              </select>
              <i id="category-arrow" className="fas fa-arrows-alt-v" />
            </div>
          </div>
          <div className="event-form-footer">
            <h1>Nice Job! You're Almost Done.</h1>
            <input
              type="submit"
              className="create-event-form-submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(EventForm);
