require 'byebug'

def strange_sums(numbers)
  count = 0

  (0...numbers.length - 1).each do |i|
    (i...numbers.length).each do |j|
      count += 1 if numbers[i] + numbers[j] == 0
    end
  end

  count
end

# p strange_sums([2, -3, 3, 4, -2])     # 2
# p strange_sums([42, 3, -1, -42])      # 1
# p strange_sums([-5, 5])               # 1
# p strange_sums([19, 6, -3, -20])      # 0
# p strange_sums([9])                   # 0

def pair_product(numbers, product)
  (0...numbers.length - 1).each do |i|
    (i+1...numbers.length).each do |j|
      return true if numbers[i] * numbers[j] == product
    end
  end

  false
end

# p pair_product([4, 2, 5, 8], 16)    # true
# p pair_product([8, 1, 9, 3], 8)     # true
# p pair_product([3, 4], 12)          # true
# p pair_product([3, 4, 6, 2, 5], 12) # true
# p pair_product([4, 2, 5, 7], 16)    # false
# p pair_product([8, 4, 9, 3], 8)     # false
# p pair_product([3], 12)             # false

def rampant_repeats(str, hash)
  new_str = ""

  str.each_char do |char|
    if hash.has_key?(char)
      new_str += char * hash[char]
    else
      new_str += char
    end
  end

  new_str
end

# p rampant_repeats('taco', {'a'=>3, 'c'=>2})             # 'taaacco'
# p rampant_repeats('feverish', {'e'=>2, 'f'=>4, 's'=>3}) # 'ffffeeveerisssh'
# p rampant_repeats('misispi', {'s'=>2, 'p'=>2})          # 'mississppi'
# p rampant_repeats('faarm', {'e'=>3, 'a'=>2})            # 'faaaarm'


def perfect_square(num)
  # Math.sqrt(num) == Math.sqrt(num).to_i
  (1..num).each do |n|
    return true if n * n == num
  end
  false
end

# p perfect_square(1)     # true
# p perfect_square(4)     # true
# p perfect_square(64)    # true
# p perfect_square(100)   # true
# p perfect_square(169)   # true
# p perfect_square(2)     # false
# p perfect_square(40)    # false
# p perfect_square(32)    # false
# p perfect_square(50)    # false

def anti_prime?(number)
  divisor_below_num = (1...number).to_a.map { |num| number_of_divisors(num) }

  number_of_divisors(number) > divisor_below_num.max
end

def number_of_divisors(number)
  (1..number).to_a.count { |num| number % num == 0 }
end

# p anti_prime?(24)   # true
# p anti_prime?(36)   # true
# p anti_prime?(48)   # true
# p anti_prime?(360)  # true
# p anti_prime?(1260) # true
# p anti_prime?(27)   # false
# p anti_prime?(5)    # false
# p anti_prime?(100)  # false
# p anti_prime?(136)  # false
# p anti_prime?(1024) # false

def matrix_addition(m1, m2)
  height = m1.length
  width = m1[0].length
  result = Array.new(height) { [0] * width }
debugger
  (0...height).each do |row|
    (0...width).each do |col|
      result[row][col] = m1[row][col] + m2[row][col]
    end
  end

  result
end

# matrix_a = [[2,5], [4,7]]
# matrix_b = [[9,1], [3,0]]
# matrix_c = [[-1,0], [0,-1]]
# matrix_d = [[2, -5], [7, 10], [0, 1]]
# matrix_e = [[0 , 0], [12, 4], [6,  3]]

# p matrix_addition(matrix_a, matrix_b) # [[11, 6], [7, 7]]
# p matrix_addition(matrix_a, matrix_c) # [[1, 5], [4, 6]]
# p matrix_addition(matrix_b, matrix_c) # [[8, 1], [3, -1]]
# p matrix_addition(matrix_d, matrix_e) # [[2, -5], [19, 14], [6, 4]]

def mutual_factors(*numbers)
  factors = []

  (1..numbers.min).each do |fact|
    if numbers.all? { |num| num % fact == 0 }
      factors << fact
    end
  end

  factors
end

# p mutual_factors(50, 30)            # [1, 2, 5, 10]
# p mutual_factors(50, 30, 45, 105)   # [1, 5]
# p mutual_factors(8, 4)              # [1, 2, 4]
# p mutual_factors(8, 4, 10)          # [1, 2]
# p mutual_factors(12, 24)            # [1, 2, 3, 4, 6, 12]
# p mutual_factors(12, 24, 64)        # [1, 2, 4]
# p mutual_factors(22, 44)            # [1, 2, 11, 22]
# p mutual_factors(22, 44, 11)        # [1, 11]
# p mutual_factors(7)                 # [1, 7]
# p mutual_factors(7, 9)              # [1]

def tribonacci_number(num)
  return 1 if num == 1 || num == 2
  return 2 if num == 3

  tribonacci_number(num - 1) + tribonacci_number(num - 2) + tribonacci_number(num - 3)
end

# p tribonacci_number(1)  # 1
# p tribonacci_number(2)  # 1
# p tribonacci_number(3)  # 2
# p tribonacci_number(4)  # 4
# p tribonacci_number(5)  # 7
# p tribonacci_number(6)  # 13
# p tribonacci_number(7)  # 24
# p tribonacci_number(11) # 274

def squarocol?(grid)
  return true if grid.any? { |row| row.uniq.length == 1 }
  return true if grid.transpose.any? { |col| col.uniq.length == 1 }

  false
end

def squaragonal?(grid)
  diagonal1 = []
  diagonal2 = []

  (0...grid.length).each do |row|
    diagonal1 << grid[row][grid.length - row - 1]
  end

  (0...grid.length).each do |row|
    diagonal2 << grid[row][row]
  end

  return true if diagonal1.uniq.length == 1
  return true if diagonal2.uniq.length == 1
  false
end

# p squaragonal?([
#     [:x, :y, :o],
#     [:x, :x, :x],
#     [:o, :o, :x],
# ]) # true

# p squaragonal?([
#     [:x, :y, :o],
#     [:x, :o, :x],
#     [:o, :o, :x],
# ]) # true

# p squaragonal?([
#     [1, 2, 2, 7],
#     [1, 1, 6, 7],
#     [0, 5, 1, 7],
#     [4, 2, 9, 1],
# ]) # true

# p squaragonal?([
#     [1, 2, 2, 5],
#     [1, 6, 5, 0],
#     [0, 2, 2, 7],
#     [5, 2, 9, 7],
# ]) # false


