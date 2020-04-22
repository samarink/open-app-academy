def hipsterfy(str)
    reversed = str.reverse
    vowels = "aeiou"

    i = 0
    while i < str.length
        if vowels.include?(str[i])
            reversed[i] = ""
            return reversed.reverse
        end

        i += 1
    end

    reversed.reverse
end

def vowel_counts(str)
    vowels_hash = Hash.new(0)
    vowels = "aeiou"
    words = str.split(" ")

    words.each do |word|
        word.each_char { |char| vowels_hash[char.downcase] += 1 if vowels.include?(char.downcase) }
    end

    vowels_hash
end

def caesar_cipher(str, shift)  
    words = str.split(" ")
    coded = []

    words.each { |word| coded << caesar_cipher_word(word, shift) }

    coded.join(" ")
end

def caesar_cipher_word(str, shift)
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    new_word = ""

    str.each_char.with_index do |char, i|
        if alphabet.include?(char)
            new_char = alphabet[(i + shift) % 26]
            new_word += new_char
        else
            new_word += char.to_s
        end
    end

    new_word
end

print caesar_cipher_word("apple", 1)