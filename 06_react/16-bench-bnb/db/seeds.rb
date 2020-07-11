Bench.delete_all
User.delete_all

b1 = Bench.create!(
  description: 'alamo square, many dogs',
  lat: 37.775769,
  lng: -122.434960,
)

b2 = Bench.create!(
  description: 'UN plaza, food truck access',
  lat: 37.779760,
  lng: -122.413820,
)

Bench.create!(
  description: 'Ocean Beach, gnarly breh',
  lat: 37.769996,
  lng: -122.511281,
)

u1 = User.create!(
  username: 'k',
  password: '123456'
)

u2 = User.create!(
  username: 'username',
  password: 'password'
)
