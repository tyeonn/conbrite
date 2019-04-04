# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Event.delete_all

user = User.create!(
  email: 'demo@demo.com',
  first_name: 'Demo',
  last_name: 'User',
  password: 'demouser'
)

Event.create!(
  title: 'New York Comic Con',
  description: 'Largest comic convention on the east coast. Hosting the 
   latest in comics, anime, manga, video games, movies, etc.',
  address: '655 West 34th Street, New York, NY, 10014' ,     
  image_url: 'https://cnet1.cbsistatic.com/img/xBshnVs6E1cL8i_shQt9OoAPVus=/1600x900/2018/06/13/792de549-6718-438c-8359-4e4989606bc5/fortnite-booth-e3-2018-7646.jpg',    
  start_date: 'Thur 2019 Oct 03 10:00:00',   
  end_date: 'Sat 2019Oct 05 12:00:00',     
  max_tickets: 50000,  
  location_id: 1,  
  category_id: 1,  
  organizer_id: user.id
)

Event.create!(
  title: 'Pax East',
  description: 'Gaming culture festival involving tabletop gaming, arcade gaming,
    and video gaming.',
  address: '415 Summer St, Boston, MA, 02210',      
  image_url: 'http://hw1.pa-cdn.com/pax/shared-assets/img/meta/meta_pax_east.png',    
  start_date: 'Thur 2019 Mar 28 10:00:00',   
  end_date: 'Sun 2019 Mar 31 15:00:00',     
  max_tickets: 60000,  
  location_id: 1,  
  category_id: 1,  
  organizer_id: user.id
)

Event.create!(
  title: 'BlizzCon',
  description: 'Annual gaming convention held by Blizzard Entertainment to
    promote its major franchises, Warcraft, StarCraft, Diablo, Hearthstone,
    Heroes of the Storm, and Overwatch.',
  address: '800 West Katella Avenue, Anaheim, CA, 92802',      
  image_url: 'https://icdn4.digitaltrends.com/image/blizzcon-720x720.jpg?ver=1.jpg',    
  start_date: 'Sat 2019 Nov 02 11:00:00',   
  end_date: 'Tue 2019 Nov 05 18:00:00',     
  max_tickets: 40000,  
  location_id: 1,  
  category_id: 1,  
  organizer_id: user.id
)

