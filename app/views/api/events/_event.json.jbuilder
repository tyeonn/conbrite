json.extract! event, :id, :title, :description, :address, :image_url, :start_date,
  :end_date, :location_id, :category_id, :organizer_id

json.category event.category.name