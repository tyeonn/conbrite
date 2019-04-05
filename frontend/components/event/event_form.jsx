import React from 'react';
import DatePicker from 'react-datepicker';
import { withRouter } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

// import 'react-dates/initialize';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
class EventForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.event;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.props.formType === 'Create Event'){
      return this.props.createEvent(this.state).then(
        () => this.props.history.push(`/`)
      );
    }else{
      return this.props.updateEvent(this.state).then(
        () => this.props.history.push(`/event/${this.state.id}`)
      );
    }
    
  }

  update(field){
    return e => {
      // if (e.currentTarget.value) {
      //   this.setState({ active: true });
      // } else {
      //   this.setState({ active: false });
      // }
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }
  handleChangeStart(date) {
    let fullDate = date.toDateString().split(' ');
    let time = date.toTimeString().split(' ')[0];
    let [dayOfWeek, month, day, year] = fullDate;
    this.setState({
      startDate: date,
      start_date: `${dayOfWeek} ${year} ${month} ${day} ${time}`
    });
  }

  handleChangeEnd(date) {
    let fullDate = date.toDateString().split(' ');
    let time = date.toTimeString().split(' ')[0];
    let [dayOfWeek, month, day, year] = fullDate;
    this.setState({
      endDate: date,
      end_date: `${dayOfWeek} ${year} ${month} ${day} ${time}`
    });
  }

  componentDidMount(){

    this.setState({
      image_url: 'https://cnet1.cbsistatic.com/img/xBshnVs6E1cL8i_shQt9OoAPVus=/1600x900/2018/06/13/792de549-6718-438c-8359-4e4989606bc5/fortnite-booth-e3-2018-7646.jpg',
      category_id: 1,
      // focusedInput: null,
      startDate: new Date(),
      endDate: new Date(),
    });
  }

  render(){
    return(
      <div className='event-form-container'>
        <form className='event-form' onSubmit={this.handleSubmit}>
          <div className='event-form-header'>
            <h1>{this.props.formType}</h1>
            {/* <button onSubmit={this.handleSubmit}> Publish </button> */}
          </div>

          <div className='event-form-detail-header'>
            <i> 1 </i>
            <h1>Event Details</h1>
          </div>
          <div className='event-form-detail'>
            <input type="text"
              value={this.state.title}
              onChange={this.update('title')}
              className={`event-form-input`}
              required
            />
            <label htmlFor="event-form-input">Event Title</label>
          </div>
          <div className='event-form-detail'>
            <input type="text"
              value={this.state.address}
              onChange={this.update('address')}
              className={`event-form-input`}
              required
            />
            <label htmlFor="event-form-input">Location</label>
          </div>
          <div className='event-form-detail date'>
            {/* <input type="date"
              value={this.state.start_date}
              onChange={this.update('start_date')}
              className={`event-form-input-date`}
              required
            />
            <label htmlFor="event-form-input-date">Starts</label>
          </div>
          <div className='event-form-detail'>
            <input type="date"
              value={this.state.end_date}
              onChange={this.update('end_date')}
              className={`event-form-input-date`}
              required
            />
            <label htmlFor="event-form-input-date">Ends</label> */}
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChangeStart}
              showTimeSelect
              dateFormat="MMMM d yyyy h:mm aa"
              timeCaption="Start"
            />
            <DatePicker
              selected={this.state.endDate}
              onChange={this.handleChangeEnd}
              showTimeSelect
              dateFormat="MMMM d yyyy h:mm aa"
              timeCaption="End"
            />
            {/* <DateRangePicker
            
              startDate={this.state.startDate}
              startDateId='start_date'
              endDate={this.state.endDate}
              endDateId='end_date'
              onDatesChange={ ({startDate, endDate}) => this.setState({startDate, endDate}) }
              focusedInput={this.state.focusedInput}
              onFocusChange={ focusedInput => this.setState({ focusedInput }) }
            /> */}
          </div>
          <div className='event-form-detail'>
            {/* <input type="file" id='input-image-file' ref={inputImage} style={{display:none}} /> */}
            {/* <button onClick={ () => inputImage.current.click }>
              Upload Image
            </button> */}
            <button> Upload Image </button>
          </div>
          <div className='event-form-detail'>
            <textarea 
              className={`event-form-textarea`}
              value={this.state.description}
              onChange={this.update('description')}
              required
            ></textarea>
            <label htmlFor="event-form-textarea">Event Description</label>
          </div>

          <div className='event-form-detail-header'>
            <i> 2 </i>
            <h1>Create Tickets</h1>
          </div>
          <div className='event-form-detail'>
            <input type="number"
              className='event-form-input'
              onChange={this.update('max_tickets')}
              required 
            />
          </div>

          <div className='event-form-detail-header'>
            <i> 3 </i>
            <h1>Additional Settings</h1>
          </div>
          <div className='event-form-detail'>
            <select className='event-form-category-dropdown'>
              <option value="Gaming"> Gaming </option>
              <option value="Performing & Visual Arts"> Performing & Visual Arts </option>
              <option value="Business & Professional"> Business & Professional </option>
              <option value="Music"> Music </option>
              <option value="Travel & Outdoor"> Travel & Outdoor </option>
              <option value="Science & Technology"> Science & Technology </option>
            </select>
          </div>
          <div className='event-form-footer'>
            <input 
              type="submit" 
              className='create-event-form-submit' 
              value='Make Your Event Live'
            />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(EventForm);