def first_anagram?(first, second)
  possible_anagrams = first.split("").permutation.to_a
  possible_anagrams.include?(second.split(""))
end

def second_anagram(first, second)
  arr1, arr2 = first.split(""), second.split("")

  arr1.each do |letter|
    target_idx = arr2.find_index(letter)
    return false unless target_idx
    arr2.delete_at(target_idx)
  end

  arr2.empty?
end

def third_anagram(first, second)
  sorted_strings = [first, second].map do |str|
    str.split("").sort.join
  end

  sorted_strings.first == sorted_strings.last
end

def fourth_anagram(str1, str2)
  letter_count1 = Hash.new(0)
  letter_count2 = Hash.new(0)

  str1.ech_char { |char| letter_count1[char] += 1 }
  str2.ech_char { |char| letter_count2[char] += 1 }

  letter_count1 == letter_count2
end

def fourth_one_hash(str1, str2)
  letter_sums = Hash.new(0)

  str1.each_char { |char| letter_sums[char] += 1 }
  str2.each_char { |char| letter_sums[char] -= 1 }

  letter_sums.each_value.all? { |sum| sum == 0 }
end
