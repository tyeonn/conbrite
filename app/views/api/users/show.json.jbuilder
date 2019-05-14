# frozen_string_literal: true

json.partial! 'api/users/user', user: @user
# json.registered_tickets @user.registered_tickets
json.registered_tickets do
  json.array! @user.registered_tickets.each do |ticket|
    
      json.extract! ticket, :id, :name, :price, :ticket_type, :quantity, :event_id, :event
    
  end
end

# json.registered_ticketss do
#   @user.registered_tickets.each do |ticket|
#     json.set! ticket.id do
#       json.extract! ticket, :event
#     end
#   end
# end
