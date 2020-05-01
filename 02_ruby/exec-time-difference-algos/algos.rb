def my_min1(list)
  list.each_with_index do |num1, i1|
    min = true

    list.each_with_index do |num2, i2|
      next if i1 == i2
      min = false if num2 < num1
    end

    return num1 if min
  end
end

def my_min2(list)
  min = list.first

  list.each { |num| min = num if num < min }

  min
end

def largest_sub_sum(list)
  subs = []

  list.each_index do |idx1|
    (idx1..list.length - 1).each do |idx2|
      subs << list[idx1..idx2]
    end
  end

  subs.map { |sub| sub.inject(:+) }.max
end

def largest_cont_subsum(list)
  largest = list.first
  current = list.first

  (1...arr.length).each do |i|
    current = 0 if current < 0
    current += list[i]
    largest = current if current > largest
  end

  largest
end
