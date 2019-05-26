# frozen_string_literal: true

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
Category.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('categories')

cat = Category.create!(
  name: 'Gaming'
)
cat1 = Category.create!(
  name: 'Performing & Visual Arts'
)
cat2 = Category.create!(
  name: 'Business & Professional'
)
cat3 = Category.create!(
  name: 'Music'
)
cat4 = Category.create!(
  name: 'Travel & Outdoor'
)
cat5 = Category.create!(
  name: 'Science & Technology'
)
cat6 = Category.create!(
  name: 'Sports'
)

user = User.create!(
  email: 'demo@demo.com',
  first_name: 'Timothy',
  last_name: 'Wu',
  password: 'demouser'
)

user_two = User.create!(
  email: 'demo2@demo.com',
  first_name: 'Yeasle',
  last_name: 'Lee',
  password: 'demouser'
)

event = Event.create!(
  title: 'New York Comic Con',
  description: 'Largest comic convention on the east coast. Hosting the latest in comics, anime, manga, video games, movies, and television. ',
  address: '655 West 34th Street, New York, NY, 10014',
  image_url: 'https://cnet1.cbsistatic.com/img/xBshnVs6E1cL8i_shQt9OoAPVus=/1600x900/2018/06/13/792de549-6718-438c-8359-4e4989606bc5/fortnite-booth-e3-2018-7646.jpg',
  start_date: 'Thur 2019 Oct 03 10:00',
  end_date: 'Sat 2019 Oct 05 12:00',
  location_id: 1,
  category_id: cat.id,
  organizer_id: user.id
)

Ticket.create!(
  name: 'General',
  price: 25,
  ticket_type: 'Paid',
  quantity: 5000,
  event_id: event.id
)
Ticket.create!(
  name: 'VIP',
  price: 89.95,
  ticket_type: 'Paid',
  quantity: 500,
  event_id: event.id
)

event2 = Event.create!(
  title: 'Pax East',
  description: 'Gaming culture festival involving tabletop gaming, arcade gaming, and video gaming.',
  address: '415 Summer St, Boston, MA, 02210',
  image_url: 'http://hw1.pa-cdn.com/pax/shared-assets/img/meta/meta_pax_east.png',
  start_date: 'Wed 2019 Dec 25 10:00',
  end_date: 'Sat 2019 Dec 28 15:00',
  location_id: 1,
  category_id: cat.id,
  organizer_id: user.id
)

Ticket.create!(
  name: 'General',
  price: 75,
  ticket_type: 'Paid',
  quantity: 5000,
  event_id: event2.id
)
Ticket.create!(
  name: 'VIP',
  price: 300,
  ticket_type: 'Paid',
  quantity: 500,
  event_id: event2.id
)

event3 = Event.create!(
  title: 'BlizzCon',
  description: 'Annual gaming convention held by Blizzard Entertainment to promote its major franchises: Warcraft, StarCraft, Diablo, Hearthstone, Heroes of the Storm, and Overwatch.',
  address: '800 West Katella Avenue, Anaheim, CA, 92802',
  image_url: 'https://icdn4.digitaltrends.com/image/blizzcon-720x720.jpg?ver=1.jpg',
  start_date: 'Sat 2019 Nov 02 11:00',
  end_date: 'Tue 2019 Nov 05 18:00',
  location_id: 1,
  category_id: cat.id,
  organizer_id: user_two.id
)

Ticket.create!(
  name: 'General',
  price: 100,
  ticket_type: 'Paid',
  quantity: 5000,
  event_id: event3.id
)

Ticket.create!(
  name: 'VIP',
  price: 350,
  ticket_type: 'Paid',
  quantity: 500,
  event_id: event3.id
)

event4 = Event.create!(
  title: 'Developer Week New York City',
  description: "New York City's largest developer conference and expo.  Join 3000+ developers, devops pros, and executives to discover the latest in App Development, DevOps, Dev Management, and Fintech Dev.",
  address: 'Brooklyn EXPO Center, 72 Noble St, Brooklyn, NY 11222',
  image_url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F58760638%2F30266753513%2F1%2Foriginal.20190319-183631?w=512&auto=compress&rect=0%2C0%2C2160%2C1080&s=c1db1dccb313ca5e27929ad441544a31',
  start_date: 'Mon 2019 Jun 17 10:00',
  end_date: 'Thur 2019 Jun 20 18:00',
  location_id: 1,
  category_id: cat5.id,
  organizer_id: user_two.id
)

Ticket.create!(
  name: 'Developer',
  price: 395,
  ticket_type: 'Paid',
  quantity: 10_000,
  event_id: event4.id
)
Ticket.create!(
  name: 'Executive',
  price: 950,
  ticket_type: 'Paid',
  quantity: 50,
  event_id: event4.id
)

event5 = Event.create!(
  title: 'New York Philharmonic',
  description: "The New York Philharmonic plays a leading cultural role in New York City, the United States, and the world. Each season the Philharmonic connects with up to 50 million music lovers through live concerts in New York and around the world, international broadcasts, recordings, education programs, and the New York Philharmonic Leon Levy Digital Archives. Jaap van Zweden becomes Music Director in 2018–19, succeeding musical leaders including Alan Gilbert, Maazel, Masur, Zubin Mehta, Boulez, Bernstein, Toscanini, and Mahler.

  The Philharmonic has commissioned and / or premiered works by leading composers from every era since its founding in 1842, including Dvořák’s New World Symphony; John Adams’s Pulitzer Prize–winning On the Transmigration of Souls, dedicated to the victims of 9/11; Esa-Pekka Salonen’s Piano Concerto; Wynton Marsalis’s The Jungle (Symphony No. 4); and Anna Thorvaldsdottir’s Metacosmos.

  A resource for its community and the world, the Philharmonic complements its annual free citywide Concerts in the Parks, Presented by Didi and Oscar Schafer, with Philharmonic Free Fridays, its famed Young People’s Concerts, and the Shanghai Orchestra Academy and Residency Partnership. The oldest American symphony orchestra and one of the oldest in the world, the New York Philharmonic has made more than 2,000 recordings since 1917 and produced its first-ever Facebook Live concert broadcast in 2016.",
  address: 'David Geffen Hall, 10 Lincoln Center Plaza, New York, NY 10023',
  image_url: 'http://a3.images.lincolncenter.org/image/upload/c_fill,g_faces:center,h_1080,w_1920/b11ujeb0a7p4n28lt7mo',
  start_date: 'Thur 2019 Aug 15 19:00',
  end_date: 'Thur 2019 Aug 15 21:00',
  location_id: 1,
  category_id: cat3.id,
  organizer_id: user_two.id
)

Ticket.create!(
  name: 'Orchestra',
  price: 100,
  ticket_type: 'Paid',
  quantity: 350,
  event_id: event5.id
)

Ticket.create!(
  name: 'Balcony',
  price: 75,
  ticket_type: 'Paid',
  quantity: 100,
  event_id: event5.id
)

event6 = Event.create!(
  title: 'SPSP 2020 Annual Convention',
  description: "The Society for Personality and Social Psychology’s Annual Convention is the premier international event for more than 3,800 social and personality psychologists. 

  Attendees from academia, non-profit, government, and private sectors present and discuss research, network and collaborate on projects, and pursue professional development while advancing science and pedagogy in the field. 
  
  The 2020 convention will begin with preconferences on February 27. The two-day convention that follows will be held on February 28-29, 2020.",
  address: 'Hyatt Regency in New Orleans, 601 Loyola Ave, New Orleans, LA 70113',
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/SPSP_Logo.jpg',
  start_date: 'Thur 2020 Feb 27 10:00',
  end_date: 'Sat 2020 Aug 29 17:00',
  location_id: 1,
  category_id: cat2.id,
  organizer_id: user.id
)

Ticket.create!(
  name: 'Early Bird',
  price: 230,
  ticket_type: 'Paid',
  quantity: 350,
  event_id: event6.id
)

Ticket.create!(
  name: 'Onsite',
  price: 350,
  ticket_type: 'Paid',
  quantity: 1000,
  event_id: event6.id
)

event7 = Event.create!(
  title: 'Music Expo San Francisco',
  description: "Started in 2014, Music Expo is a music institution committed to facilitating dialog between music makers. In association with Sound On Sound Magazine, we bring 6,000 music makers together through a well established series of annual events nationwide including in Boston, Miami, Nashville and San Francisco.

  In 2018, we programmed 100 hours of intimate and hyper-focused sessions with artists, producers, engineers, influencers, and tastemakers. We have pledged a minimum of 1% of our revenues to fund non-profit organizations supporting local music communities. We have committed to a minimum of 30% diversity across the lineup including minorities and women.
  
  Gain direct access and build brand recognition with over 5,000 music makers
  
  Unveil your latest gear and innovations in an environment where you can meet face-to-face with your end-users
  
  Feature your products in education workshops & studio sessions led by pros
  
  Select the package that suite your objectives; from exhibition to exclusive sponsorship",
  address: 'SAE Expression College
  6601 Shellmound St, Emeryville, CA 94608',
  image_url: 'http://static1.squarespace.com/static/55526eb3e4b07975f179bf2b/t/5c270f744d7a9c2ebbe177c0/1546063770468/Website+-+Social+Image+Sharing.001.png?format=1500w',
  start_date: 'Sat 2019 Nov 09 9:00',
  end_date: 'Sun 2019 Nov 10 16:00',
  location_id: 1,
  category_id: cat3.id,
  organizer_id: user.id
)

Ticket.create!(
  name: 'Early Bird',
  price: 30,
  ticket_type: 'Paid',
  quantity: 5000,
  event_id: event7.id
)

Ticket.create!(
  name: 'VIP',
  price: 80,
  ticket_type: 'Paid',
  quantity: 300,
  event_id: event7.id
)