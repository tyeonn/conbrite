# Conbrite

 [Live Link](https://conbrite.herokuapp.com)

 ![Screenshot](https://github.com/tyeonn/conbrite/blob/master/app/assets/images/readme_pic.png)

### Background
[Eventbrite](https://www.eventbrite.com/)  
Conbrite is a platform inspired by Eventbrite that focuses on concerts, conventions, and conferences. It is a single-page application where users can create, browse, and register for events. It was built using Ruby on Rails and PostgreSQL on the backend and React/Redux on the frontend. The application was deployed on heroku and implements many features for a smooth event booking experience.

### Functionality & MVP  

There are several main features for Conbrite: 
- [ ] User Authentication - Login/Signup/Signin/Logout - Demo User
- [ ] Auth and Protected Routes for the components 
- [ ] `Create` and `edit` own events only (Can't delete live events in case a user already bought tickets)
- [ ] `Create` several tickets for each event (Can't delete tickets if event is live in case a user already bought that ticket)
- [ ] Users can `bookmark` events
- [ ] Users can `register` for events by buying tickets (Users can also `refund` tickets)
- [ ] Users can see their `registered events` and `bookmarked events`
- [ ] Users can `search` for events based on event name, category, and address

### Architecture and Technologies

This project is implemented with the following technologies:

- `Ruby on Rails` for the backend framework
- `PostgreSQL` for the database
- `React` for the frontend using `Redux` as the state manager
- `jQuery` to send AJAX requests to the backend
- `CSS` for styling
- `Heroku` to deploy the live application
- `Webpack` to bundle JavaScript files

### Implementation

#### Create Ticket 
![Screenshot](https://github.com/tyeonn/conbrite/blob/master/app/assets/images/create_ticket.png)  
Users can create many tickets using this ticket form. The type of ticket is chosen first, then the details for each ticket.
Tickets that are not live yet can also be deleted.

#### Register for Events
![Screenshot](https://github.com/tyeonn/conbrite/blob/master/app/assets/images/register_event.png)  
Once the user clicks register on the event show page, this modal will pop up. Users can buy up to 5 tickets at a time.

#### Edit and Bookmark Events
![Screenshot](https://github.com/tyeonn/conbrite/blob/master/app/assets/images/bookmark_events.png)  
Users can edit their own events by clicking the pencil icon under the picture. 
Users can bookmark an event that they like by clicking on the heart icon. 

#### Search for Events
![Screenshot](https://github.com/tyeonn/conbrite/blob/master/app/assets/images/search.png)  
```ruby
def index
  if(!params[:searchValue])
    @events = Event.all
    if @events
      render :index
    else
      render json: ['There are no events'], status: 404
    end
  else
    search = "%#{params[:searchValue]}%"
    @events = Event.joins(:category).where('title ILIKE ? OR categories.name ILIKE ? OR address ILIKE ?', search, search, search)
  end
end
```
Users can search by event name, category, and address. If no parameters are provided, it will show all the events currently available. Search is implemented using ILIKE SQL queries, which allows for partial words to work. For example, searching for 'mu' will fetch the events under the music category.

#### Selling and Refunding Tickets
```ruby
def sell_ticket
  @ticket = Ticket.find_by(id: params[:id])
  if @ticket
    @ticket.update!(quantity: @ticket.quantity - params['ticket'][:quantity].to_i)
    params['ticket'][:quantity].to_i.times { @ticket.registered_users << current_user }
    render :show
  else
    render json: @ticket.errors.full_messages, status: 422
  end
end

def refund_ticket
  @ticket = Ticket.find_by(id: params[:id])
  if @ticket
    @ticket.update!(quantity: @ticket.quantity + params['ticket'][:quantity].to_i)
      @ticket.registrations.first.delete
    render :show
  else
    render json: @ticket.errors.full_messages, status: 422
  end
end
```
Implementing tickets for events is tricky since each ticket has a quantity. For example, a VIP ticket for event A has a quantity of 500 tickets. Selling a 'VIP ticket' would essentially associate the user with the entire row in the Tickets table in the database. This is solved by creating a Registration joins table between Tickets and Users. The flow of tables is `events` -> `tickets` -> `registrations` -> `users`. 

To sell (or register) tickets, it subtracts the quantity from the ticket and adds that many rows to the registration table.
To refund tickets, it deletes the row in the registration table and adds that quantity back to the relevant ticket.

Future implementations:

- [ ] Implement Google Maps API to search by location
- [ ] Implement AWS to upload pictures
