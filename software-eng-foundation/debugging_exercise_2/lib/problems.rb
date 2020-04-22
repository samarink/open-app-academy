# Run `bundle exec rspec` and satisy the specs.
# You should implement your methods in this file.
# Feel free to use the debugger when you get stuck.

require "byebug"

def prime?(num)
    (2...num).each do |factor|
        return false if num % factor == 0
    end
    true
end

def largest_prime_factor(num)
    biggest = 2
    
    (2..num).each do |n|
        biggest = n if prime?(n) && num % n == 0
    end

    biggest
end

def unique_chars?(str)
    str.split("") == str.split("").uniq
end

def dupe_indices(arr)
    hash = Hash.new { |h, k| h[k] = [] }

    arr.each_with_index do 

    hash
end

def ana_array(arr1, arr2)
    return false if arr1.length != arr2.length

    arr1.each { |el| return false if !arr2.include?(el) }
    arr2.each { |el| return false if !arr1.include?(el) }

    true
end