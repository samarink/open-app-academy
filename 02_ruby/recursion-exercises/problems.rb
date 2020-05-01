require 'byebug'

def range(start_num, end_num)
  return [] if end_num <= start_num
  [start_num] + range(start_num + 1, end_num)
end

def sum_arr_recursive(arr)
  return arr.first if arr.length == 1
  arr.first + sum_arr_recursive(arr.drop(1))
end

def sum_arr_iterative(arr)
  result = 0
  arr.each { |num| result += num }

  result
end

def recursion1(base, exp)
  return 1 if exp == 0
  base * recursion1(base, exp - 1)
end

def recursion2(base, exp)
  return 1 if exp == 0
  return base if exp == 1

  if exp.even?
    square(recursion2(base, exp / 2))
  else
    base * square(recursion2(base, (exp - 1) / 2))
  end
end

def square(num)
  num * num
end

class Array
  def deep_dup
    new_arr = []
    self.each do |el|
      new_arr << (el.is_a?(Array) ? el.deep_dup : el)
    end
    new_arr
  end
end

def fib_iter(num)
  return [] if num == 0
  return [0] if num == 1

  fibs = [0, 1]

  while fibs.count < num
    fibs << fibs[-1] + fibs[-2]
  end

  fibs
end

def fib_rec(num)
  if num <= 2
    [0,1].take(num)
  else
    fibs = fib_rec(num - 1)
    fibs << fibs[-2] + fibs[-1]
  end
end

def bsearch(nums, target)
  return nil if nums.nil?

  prob_idx = arr.length / 2
  case nums[prob_idx] <=> target
  when 0
    probe_idx
  when -1
    bsearch(nums.take(probe_idx), target)
  when 1
    sub_answer = bsearch(nums.drop(probe_idx + 1), target)
    sub_answer.nil ? nil : (probe_idx + 1) + sub_answer
  end
end

def merge_sort(array)
  return self if count < 2

  middle = count / 2

  left, right = array.take(middle), array.drop(middle)
  sorted_left, sorted_right = merge_sort(left), merge_sort(right)

  merge(sorted_left, sorted_right)
end

def merge(left, right)
  merged = []
  until left.empty? || right.empty?
    merged << (left.first < right.first) ? left.shift : right.shift
  end

  merged + left + right
end

class Array
  def subsets
    return [[]] if empty?
    subs = take(count - 1).subsets
    subs.concat(subs.map { |sub| sub + [last] })
  end
end
