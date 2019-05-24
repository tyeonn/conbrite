json.partial! 'api/users/user', user: @user
json.bookmarks @user.bookmarked_events
json.registered_tickets do
  json.array! @user.registered_tickets.each do |ticket|
    
      json.extract! ticket, :id, :name, :price, :ticket_type, :quantity, :event_id, :event
    
  end
end

