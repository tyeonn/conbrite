# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Event.delete_all
Ticket.delete_all

user = User.create!(
  email: 'demo@demo.com',
  first_name: 'Demo',
  last_name: 'User',
  password: 'demouser'
)

user_two = User.create!(
  email: 'demo2@demo.com',
  first_name: 'Demo2',
  last_name: 'User',
  password: 'demouser'
)

event = Event.create!(
  title: 'New York Comic Con',
  description: 'Largest comic convention on the east coast. Hosting the 
   latest in comics, anime, manga, video games, movies, and television. ',
  address: '655 West 34th Street, New York, NY, 10014' ,     
  image_url: 'https://cnet1.cbsistatic.com/img/xBshnVs6E1cL8i_shQt9OoAPVus=/1600x900/2018/06/13/792de549-6718-438c-8359-4e4989606bc5/fortnite-booth-e3-2018-7646.jpg',    
  start_date: 'Thur 2019 Oct 03 10:00:00',   
  end_date: 'Sat 2019Oct 05 12:00:00',     
  max_tickets: 50000,  
  location_id: 1,  
  category_id: 1,  
  organizer_id: user.id
)

Ticket.create!(
  name: 'VIP',
  price: 89.95,
  ticket_type: 'Paid',
  quantity: 50,
  event_id: event.id
)

Ticket.create!(
  name: 'General',
  price: 25,
  ticket_type: 'Paid',
  quantity: 50,
  event_id: event.id
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
  organizer_id: user_two.id
)

Event.create!(
  title: 'Developer Week New York City',
  description: "New York City's largst developer conference and expo.  Join 3000+
    developers, devops pros, and executives to discover the latest in App 
    Development, DevOps, Dev Management, and Fintech Dev.",
  address: 'Brooklyn EXPO Center, 72 Noble St, Brooklyn, NY 11222',      
  image_url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F58760638%2F30266753513%2F1%2Foriginal.20190319-183631?w=512&auto=compress&rect=0%2C0%2C2160%2C1080&s=c1db1dccb313ca5e27929ad441544a31',    
  start_date: 'Mon 2019 Jun 17 10:00:00',   
  end_date: 'Thur 2019 Jun 20 18:00:00',     
  max_tickets: 4000,  
  location_id: 1,  
  category_id: 1,  
  organizer_id: user_two.id
)

Event.create!(
  title: 'New York Philharmonic',
  description: "The New York Philharmonic plays a leading cultural role in New York City,
    the United States, and the world. Each season the Philharmonic connects with 
    up to 50 million music lovers through live concerts in New York and around 
    the world, international broadcasts, recordings, education programs, and the 
    New York Philharmonic Leon Levy Digital Archives. Jaap van Zweden becomes 
    Music Director in 2018–19, succeeding musical leaders including Alan Gilbert, 
    Maazel, Masur, Zubin Mehta, Boulez, Bernstein, Toscanini, and Mahler. 
    The Philharmonic has commissioned and / or premiered works by leading composers 
    from every era since its founding in 1842, including Dvořák’s New World Symphony; 
    John Adams’s Pulitzer Prize–winning On the Transmigration of Souls, dedicated 
    to the victims of 9/11; Esa-Pekka Salonen’s Piano Concerto; Wynton Marsalis’s 
    The Jungle (Symphony No. 4); and Anna Thorvaldsdottir’s Metacosmos. 
    A resource for its community and the world, the Philharmonic complements its 
    annual free citywide Concerts in the Parks, Presented by Didi and Oscar Schafer, 
    with Philharmonic Free Fridays, its famed Young People’s Concerts, and the 
    Shanghai Orchestra Academy and Residency Partnership. The oldest American 
    symphony orchestra and one of the oldest in the world, the New York Philharmonic 
    has made more than 2,000 recordings since 1917 and produced its first-ever 
    Facebook Live concert broadcast in 2016.",
  address: 'David Geffen Hall, 10 Lincoln Center Plaza, New York, NY 10023',      
  image_url: 'http://a3.images.lincolncenter.org/image/upload/c_fill,g_faces:center,h_1080,w_1920/b11ujeb0a7p4n28lt7mo',    
  start_date: 'Thur 2019 Apr 25 19:00:00',   
  end_date: 'Thur 2019 Apr 25 21:00:00',     
  max_tickets: 3000,  
  location_id: 1,  
  category_id: 1,  
  organizer_id: user_two.id
)
