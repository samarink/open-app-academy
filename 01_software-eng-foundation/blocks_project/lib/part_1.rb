def select_even_nums(arr)
    arr.select(&:even?)
end

def reject_puppies(arr)
    arr.reject { |hash| hash["age"] <= 2}
end

def count_positive_subarrays(arr)
    arr.count { |subarr| subarr.sum > 0 }
    #arr.count(&:sum > 0)
end

def aba_translate(str)
    str.split("").map do |char|
        if "aoiue".include?(char)
            char + "b" + char
        else
            char
        end
    end
    .join("")
end

def aba_array(arr)
    arr.map { |word| aba_translate(word) }
end