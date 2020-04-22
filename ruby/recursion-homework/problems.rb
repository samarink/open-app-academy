def sum_to(number)
  return nil if number <= 0
  return number if number == 1
  number + sum_to(number - 1)
end

  # Test Cases
# p sum_to(5)  # => returns 15
# p sum_to(1)  # => returns 1
# p sum_to(9)  # => returns 45
# p sum_to(-8)  # => returns nil

def add_numbers(nums_array)
  return nil if nums_array.empty?
  return nums_array.first if nums_array.length == 1
  nums_array.first + add_numbers(nums_array.drop(1))
end

# Test Cases
# p  add_numbers([1,2,3,4]) # => returns 10
# p  add_numbers([3]) # => returns 3
# p  add_numbers([-80,34,7]) # => returns -39
# p  add_numbers([]) # => returns nil

def gamma_fnc(number)
  return nil if number == 0
  factorial(number - 1)
end

def factorial(number)
  return 1 if number <= 1
  number * factorial(number - 1)
end

# Test Cases
# p  gamma_fnc(0)  # => returns nil
# p  gamma_fnc(1)  # => returns 1
# p  gamma_fnc(4)  # => returns 6
# p  gamma_fnc(8)  # => returns 5040

def ice_cream_shop(flavors, favorite)
  return false if flavors.empty?

  if flavors.first == favorite
    return true
  else
    ice_cream_shop(flavors.drop(1), favorite)
  end
end

  # Test Cases
# p  ice_cream_shop(['vanilla', 'strawberry'], 'blue moon')  # => returns false
# p  ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')  # => returns true
# p  ice_cream_shop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')  # => returns false
# p  ice_cream_shop(['moose tracks'], 'moose tracks')  # => returns true
# p  ice_cream_shop([], 'honey lavender')  # => returns false

def reverse(str)
  return str if str.length <= 1
  reverse(str[1..-1]) + str[0]
end

# Test Cases
p  reverse("house") # => "esuoh"
p  reverse("dog") # => "god"
p  reverse("atom") # => "mota"
p  reverse("q") # => "q"
p  reverse("id") # => "di"
p  reverse("") # => ""
