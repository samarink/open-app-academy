def palindrome?(str)
    front = 0
    rear = str.length - 1
    
    while front < str.length / 2
        return false if str[front] != str[rear]

        front += 1
        rear -= 1
    end

    true
end

def substrings(str)
    substr = []
    
    (0...str.length).each do |i|
        substr << str[i]
        j = i + 1
        while j < str.length
            substr << str[i..j]
            j += 1
        end
    end

    substr
end

def palindrome_substrings(str)
    words = str.split(" ")
    substr = []

    words.each { |word| substr << substrings(word) }

    substr.flatten.select { |el| palindrome?(el) && el.length > 1 }
end