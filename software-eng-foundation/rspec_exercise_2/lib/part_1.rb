def partition(arr, limit)
    less_than_limit = []
    more_than_limit = []

    arr.each do |el|
        if el < limit
            less_than_limit << el
        else
            more_than_limit << el
        end
    end

    [less_than_limit, more_than_limit]
end

def merge(hash1, hash2)
    new_hash = {}

    hash1.each { |key, val| new_hash[key] = val }
    hash2.each { |key, val| new_hash[key] = val }

    new_hash
end

def censor(sent, list)
    words = sent.split(" ")
    new_words = []
    vowels = "aeiou"

    words.each do |word|
        if list.include?(word.downcase)
            new_word = ""

            word.each_char do |char|
                if vowels.include?(char.downcase)
                    new_word += "*"
                else
                    new_word += char
                end
            end

            new_words << new_word
        else
            new_words << word
        end
    end

    new_words.join(" ")
end

def power_of_two?(num)
    while num > 1
        return false if num % 2 != 0

        num /= 2
    end

    true
end