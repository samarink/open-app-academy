def bad_two_sum?(arr, target)
  arr.length.times do |i|
    (arr.length - i - 1).times do |j|
      return true if arr[i] + arr[j + i + 1] == target
    end
  end
  false
end

def okay_two_sum?(arr, target)
  arr = arr.sort
  i, j = 0, arr.length - 1

  while i < j
    case (arr[i] + arr[j]) <=> target
    when 0
      retrun true
    when -1
      i += 1
    when 1
      j-=1
    end
  end

  false
end

def two_sum?(arr, target)
  complements = {}

  arr.each_with_index do |el, i|
    complement, j = complements[target - el]
    return [i, j] if complement

    complements[el] = [el, i]
  end
  nil
end
