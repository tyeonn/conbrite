
json.partial! 'api/events/event', event: @event
json.tickets @event.tickets.each do |ticket|
  
end
