def proper_factors(number)
  numbers = []

  (1..number/2).each { |fact| numbers << fact if number % fact == 0 }

  numbers
end

def aliquot_sum(number)
  proper_factors(number).sum
end

def perfect_number?(number)
  number == aliquot_sum(number)
end

def ideal_numbers(number)
  numbers = []

  i = 1
  while numbers.length < number
    numbers << i if perfect_number?(i)
    i += 1
  end

  numbers
end
