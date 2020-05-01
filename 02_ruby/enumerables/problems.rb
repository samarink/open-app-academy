require "byebug"

class Array

  def my_each(&block)
    self.length.times do |i|
      block.call(self[i])
    end

    self
  end

  def my_select(&block)
    selected = []

    self.my_each do |element|
      selected << element if block.call(element)
    end

    selected
  end

  def my_reject(&block)
    passed = []

    self.my_each do |element|
      passed << element if !block.call(element)
    end

    passed
  end

  def my_any?(&block)
    self.my_each { |element| return true if block.call(element) }
    false
  end

  def my_all?(&block)
    self.my_each { |element| return false if !block.call(element) }
    true
  end

  def my_flatten
    flattened = []

    self.my_each do |element|
      if self.is_a?(Array)
        flattened.concat(element.my_flatten)
      else
        flattened << element
      end
    end

    flattened
  end

  def my_zip(*arrays)
    zipped = []

    self.length.times do |i|
      subzip = [self[i]]

      arrays.my_each do |array|
        subzip << array[i]
      end

      zipped << subzip
    end

    zipped
  end

  def my_rotate(number = 1)
    new_arr = self[0..-1]

    if number > 0
      number.times do
        shifted_el = new_arr.shift
        new_arr << shifted_el
      end
    else
      number.abs.times do
        poped_el = new_arr.pop
        new_arr.unshift(poped_el)
      end
    end

    new_arr
  end

  def my_join(separator = "")
    joined_string = ""

    (0...self.length - 1).each do |i|
      joined_string += self[i]
      joined_string += separator
    end

    joined_string + self.last
  end

  def my_reverse
    reversed = []

    self.my_each do |el|
      reversed.unshift(el)
    end

    reversed
  end
end

# return_value = [1, 2, 3].my_each do |num|
#   puts num
# end.my_each do |num|
#   puts num
# end
# # => 1
#      2
#      3
#      1
#      2
#      3

# p return_value  # => [1, 2, 3]

# a = [1, 2, 3]
# p a.my_select { |num| num > 1 } # => [2, 3]
# p a.my_select { |num| num == 4 } # => []

# a = [1, 2, 3]
# p a.my_reject { |num| num > 1 } # => [1]
# p a.my_reject { |num| num == 4 } # => [1, 2, 3]

# a = [1, 2, 3]
# p a.my_any? { |num| num > 1 } # => true
# p a.my_any? { |num| num == 4 } # => false
# p a.my_all? { |num| num > 1 } # => false
# p a.my_all? { |num| num < 4 } # => true

#a = [ "a", "b", "c", "d" ]

#p a.my_rotate         #=> ["b", "c", "d", "a"]
#p a.my_rotate(2)      #=> ["c", "d", "a", "b"]
#p a.my_rotate(-3)     #=> ["b", "c", "d", "a"]
#p a.my_rotate(15)     #=> ["d", "a", "b", "c"]

a = [ "a", "b", "c", "d" ]
p a.my_join         # => "abcd"
p a.my_join("$")    # => "a$b$c$d"
