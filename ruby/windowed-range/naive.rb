def max_range(arr, size)
  num_windows = arr.length - size + 1
  current_max_range = nil

  num_windows.times do |i|
    window = arr.slice(i, size)
    current_range = window.max - window.min

    current_max_range = current_range if !current_max_range || current_range > current_max_range
  end

  current_max_range
end
