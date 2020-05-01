def my_reject(arr, &prc)
  new_arr = []

  arr.each do |el|
    new_arr << el if !prc.call(el)
  end

  new_arr
end

def my_one?(arr, &prc)
  result = false

  arr.each do |el|
    if prc.call(el)
      return false if result
      result = true
    end
  end

  result
end

def hash_select(hash, &prc)
  selected = {}

  hash.each do |k, v|
    selected[k] = v if prc.call(k, v)
  end

  selected
end

def xor_select(arr, prc1, prc2)
  selected = []

  arr.each do |el|
    res1 = prc1.call(el)
    res2 = prc2.call(el)

    if (res1 && !res2) || (!res1 && res2)
      selected << el
    end
  end

  selected
end


def proc_count(value, procs)
  count = 0

  procs.each do |proc|
    if proc.call(value)
      count += 1
    end
  end

  count
end
