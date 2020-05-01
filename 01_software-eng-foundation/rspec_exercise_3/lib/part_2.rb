def element_count(arr)
  hash = Hash.new(0)

  arr.each { |el| hash[el] += 1 }

  hash
end

def char_replace!(str, hash)
  str.each_char.with_index do |char, i|
    str[i] = hash[char] if hash.has_key?(char)
  end
end

def product_inject(arr)
  arr.inject { |product, n| product * n }
end
