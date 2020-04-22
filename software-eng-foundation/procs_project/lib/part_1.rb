def my_map(arr, &proc)
    new_arr = []

    arr.each { |el| new_arr << proc.call(el) }

    new_arr
end

def my_select(arr, &proc)
    new_arr = []

    arr.each { |el| new_arr << el if proc.call(el) }

    new_arr
end

def my_count(arr, &proc)
    count = 0

    arr.each { |el| count += 1 if proc.call(el) }

    count
end

def my_any?(arr, &proc)
    arr.each { |el| return true if proc.call(el) }
    false
end

def my_all?(arr, &proc)
    arr.each { |el| return false if !proc.call(el) }
    true
end

def my_none?(arr, &proc)
    arr.each { |el| return false if proc.call(el) }
    true
end