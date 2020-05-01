def zip(arr1, *rest)
  zipped = []

  if rest.nil?
    all_arrs = arr1
  else
    all_arrs = [arr1] + rest
  end

  (0...arr1.length).each do |i|
    new_arr = []

    (0...all_arrs.length).each do |j|
      new_arr << all_arrs[j][i]
    end

    zipped << new_arr
  end

  zipped
end

def prizz_proc(arr, prc1, prc2)
  new_arr = []

  arr.each do |el|
    res1 = prc1.call(el)
    res2 = prc2.call(el)

    if (res1 && !res2) || (!res1 && res2)
      new_arr << el
    end
  end

  new_arr
end

def zany_zip(arr1, *rest)
  zipped = []

  if rest.nil?
    all_arrs = arr1
  else
    all_arrs = [arr1] + rest
  end

  (0...arr1.length).each do |i|
    new_arr = []

    (0...all_arrs.length).each do |j|
      new_arr << all_arrs[j][i] || nil
    end

    zipped << new_arr
  end

  zipped
end

def maximum(arr, &prc)
  return nil if arr.empty?

  max = prc.call(arr[0])
  element = arr[0]

  arr.each do |el|
    if prc.call(el) >= max
      element = el
    end
  end

  element
end


def my_group_by(arr, &prc)
  grouped = Hash.new { |h, k| h[k] = Array.new }

  arr.each do |el|
    result = prc.call(el)
    grouped[result] << el
  end

  grouped
end

def max_tie_breaker(arr, prc, &blc)
  return nil if arr.empty?

  target_el = arr[0]
  max_res = blc.call(arr[0])

  (1...arr.length).each do |i|
    if blc.call(arr[i]) > max_res
      target_el = arr[i]
      max_res = blc.call(arr[i])
    end
  end

  target_el
end
