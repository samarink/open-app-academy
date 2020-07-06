# json.array! @guests, partial: 'api/guests/guest', as: :guest

json.array! @guests do |guest|
  next if (guest.age < 40 or guest.age > 50)

  json.name guest.name
  json.age guest.age
  json.favorite_color guest.favorite_color
end
