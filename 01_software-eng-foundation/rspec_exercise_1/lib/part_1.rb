def average(num_1, num_2)
    (num_1 + num_2) / 2.0
end

def average_array(arr)
    arr.sum / arr.length.to_f
end

def repeat(str, num)
    str * num
end

def yell(str)
    str.upcase + "!"
end

def alternating_case(str)
    str
    .split(" ")
    .each_with_index
    .map do |word, idx|
        if idx.even?
            word.upcase
        else
            word.downcase
        end
    end
    .join(" ")
end