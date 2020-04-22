require "byebug"

def no_dupes?(arr)
  frequency = Hash.new(0)

  arr.each { |el| frequency[el] += 1 }

  selected = frequency.select { |k, v| v == 1 }

  selected.keys
end

#p no_dupes?([1, 1, 2, 1, 3, 2, 4])         # => [3, 4]
#p no_dupes?(['x', 'x', 'y', 'z', 'z'])     # => ['y']
#p no_dupes?([true, true, true])            # => []

def no_consecutive_repeats?(arr)
  return true if arr.length == 1

  (0...arr.length - 1).each do |i|
    return false if arr[i] == arr[i+1]
  end

  true
end

# Examples
# p no_consecutive_repeats?(['cat', 'dog', 'mouse', 'dog'])     # => true
# p no_consecutive_repeats?(['cat', 'dog', 'dog', 'mouse'])     # => false
# p no_consecutive_repeats?([10, 42, 3, 7, 10, 3])              # => true
# p no_consecutive_repeats?([10, 42, 3, 3, 10, 3])              # => false
# p no_consecutive_repeats?(['x'])                              # => true

def char_indices(str)
  indices = Hash.new { |h, k| h[k] = Array.new }

  str.each_char.with_index do |char, i|
    indices[char] << i
  end

  indices
end

# Examples
# p char_indices('mississippi')   # => {"m"=>[0], "i"=>[1, 4, 7, 10], "s"=>[2, 3, 5, 6], "p"=>[8, 9]}
# p char_indices('classroom')     # => {"c"=>[0], "l"=>[1], "a"=>[2], "s"=>[3, 4], "r"=>[5], "o"=>[6, 7], "m"=>[8]}

def longest_streak(str)
  lngst_streak = ""

  i = 0
  while i < str.length
    current_streak = ""
    char = str[i]

    while char == str[i]
      current_streak += char
      i += 1
    end

    lngst_streak = current_streak if lngst_streak.length <= current_streak.length
  end

  lngst_streak
end

# Examples
# p longest_streak('a')           # => 'a'
# p longest_streak('accccbbb')    # => 'cccc'
# p longest_streak('aaaxyyyyyzz') # => 'yyyyy
# p longest_streak('aaabbb')      # => 'bbb'
# p longest_streak('abc')         # => 'c'


def bi_prime?(number)
  (2...number).each do |num_1|
    (num_1...number).each do |num_2|
      return true if num_1 * num_2 == number && prime?(num_1) && prime?(num_2)
    end
  end

  return false
end

def prime?(num)
  (2...num).each do |factor|
    return false if num % factor == 0
  end

  true
end

# Examples
# p bi_prime?(14)   # => true
# p bi_prime?(22)   # => true
# p bi_prime?(25)   # => true
# p bi_prime?(94)   # => true
# p bi_prime?(24)   # => false
# p bi_prime?(64)   # => false

def vigenere_cipher(message, keys)
  alpha = ("a".."z").to_a
  new_msg = ""
  current_key = 0

  message.each_char do |char|
    idx = alpha.index(char)
    new_idx = (idx + keys[current_key]) % 26
    new_msg += alpha[new_idx]

    if current_key == keys.length - 1
      current_key = 0
    else
      current_key += 1
    end
  end

  new_msg
end

# Examples
# p vigenere_cipher("toerrishuman", [1])        # => "upfssjtivnbo"
# p vigenere_cipher("toerrishuman", [1, 2])     # => "uqftsktjvobp"
# p vigenere_cipher("toerrishuman", [1, 2, 3])  # => "uqhstltjxncq"
# p vigenere_cipher("zebra", [3, 0])            # => "ceerd"
# p vigenere_cipher("yawn", [5, 1])             # => "dbbo"


def vowel_rotate(str)
  vowels = "aeiou"
  new_str = ""



  new_str
end

# Examples
# p vowel_rotate('computer')      # => "cempotur"
# p vowel_rotate('oranges')       # => "erongas"
# p vowel_rotate('headphones')    # => "heedphanos"
# p vowel_rotate('bootcamp')      # => "baotcomp"
# p vowel_rotate('awesome')       # => "ewasemo"


class String
  def select(&prc)
    return "" if prc.nil?
    new_str = ""

    self.each_char do |char|
      new_str += char if prc.call(char)
    end

    new_str
  end

  def map!(&prc)
    self.each_char.with_index do |char, i|
      self[i] = prc.call(char, i)
    end
  end
end


# Examples
# p "app academy".select { |ch| !"aeiou".include?(ch) }   # => "pp cdmy"
# p "HELLOworld".select { |ch| ch == ch.upcase }          # => "HELLO"
# p "HELLOworld".select          # => ""

# Examples
# word_1 = "Lovelace"
# word_1.map! do |ch|
#     if ch == 'e'
#         '3'
#     elsif ch == 'a'
#         '4'
#     else
#         ch
#     end
# end
# p word_1        # => "Lov3l4c3"

# word_2 = "Dijkstra"
# word_2.map! do |ch, i|
#     if i.even?
#         ch.upcase
#     else
#         ch.downcase
#     end
# end
# p word_2        # => "DiJkStRa"

def multiply(a, b)
  return 0 if b == 0

  if b < 0
    -(a + multiply(a, -b -1))
  else
    a + multiply(a, b -1)
  end
end

# p multiply(3, 5)        # => 15
# p multiply(5, 3)        # => 15
# p multiply(2, 4)        # => 8
# p multiply(0, 10)       # => 0
# p multiply(-3, -6)      # => 18
# p multiply(3, -6)       # => -18
# p multiply(-3, 6)       # => -18


def lucas_sequence(num)
 return [] if num == 0
 return [2] if num == 1
 return [2, 1] if num == 2

 seq = lucas_sequence(num - 1)
 next_el = seq[-1] + seq[-2]
 seq << next_el
 seq
end

# Examples
# p lucas_sequence(0)   # => []
# p lucas_sequence(1)   # => [2]
# p lucas_sequence(2)   # => [2, 1]
# p lucas_sequence(3)   # => [2, 1, 3]
# p lucas_sequence(6)   # => [2, 1, 3, 4, 7, 11]
# p lucas_sequence(8)   # => [2, 1, 3, 4, 7, 11, 18, 29]


def prime_factorization(num)
  (2...num).each do |fact|
    if num % fact == 0
      other_fact = num / fact
      return [*prime_factorization(fact), *prime_factorization(other_fact)]
    end
  end

  [num]
end

# Examples
p prime_factorization(12)     # => [2, 2, 3]
p prime_factorization(24)     # => [2, 2, 2, 3]
p prime_factorization(25)     # => [5, 5]
p prime_factorization(60)     # => [2, 2, 3, 5]
p prime_factorization(7)      # => [7]
p prime_factorization(11)     # => [11]
p prime_factorization(2017)   # => [2017]
