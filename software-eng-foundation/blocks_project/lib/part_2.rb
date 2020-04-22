def all_words_capitalized?(arr)
    arr.all? { |word| word == word.capitalize}
end

def no_valid_url?(arr)
    arr.none? { |str| end_url?(str)}
end

def end_url?(str)
    return true if 
    str.end_with?(".com") ||
    str.end_with?(".net") ||
    str.end_with?(".io") ||
    str.end_with?(".org") ||

    false
end

def any_passing_students?(arr)
    arr.any? { |hash| array_average(hash[:grades]) >= 75 }
end

def array_average(arr)
    arr.sum / arr.length.to_f
end