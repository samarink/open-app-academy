# Monkey-Patch Ruby's existing Array class to add your own custom methods
class Array
  def span
    return nil if self.length == 0
    self.max - self.min
  end

  def average
    return nil if self.length == 0
    self.sum / self.length.to_f
  end

  def median
    return nil if self.length == 0
    sorted = self.sort
    if self.length.odd?
      return sorted[self.length / 2]
    else
      return (sorted[self.length / 2] + sorted[self.length / 2 - 1]) / 2.0
    end
  end

  def counts
    hash = Hash.new(0)

    self.each { |el| hash[el] += 1 }

    hash
  end

  def my_count(val)
    counter = 0
    self.each { |el| counter += 1 if el == val }
    counter
  end

  def my_index(val)
    self.each_with_index { |el, i| return i if el == val }
    nil
  end

  def my_uniq
    new_arr = []
    self.each { |el| new_arr << el if !new_arr.include?(el) }
    new_arr
  end

  def my_transpose
    new_arr = []

    (0...self.length).each do |row|
      new_row = []

      (0...self.length).each do |col|
        new_row << self[col][row]  
      end

      new_arr << new_row
    end
    new_arr
  end
end