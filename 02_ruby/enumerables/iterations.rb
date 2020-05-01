def factors(num)
  factors = []

  (1..num).each do |factor|
    factors << factor if num % factor == 0
  end

  factors
end

class Array
  def bubble_sort!(&prc)
    sorted = false


    while !sorted
      sorted = true

      (0...self.length - 1).each do |i|
        if prc.call(self[i], self[i + 1]) == 1
          self[i], self[i + 1] = self[i + 1], self[i]
          sorted = false
        end
      end
    end

    self
  end

  def bubble_sort(&prc)
    self.dup.bubble_sort!(&prc)
  end
end

def substrings(str)
  substrs = []

  (0...str.length).each do |i|
    (i...str.length).each do |j|
      substr = str[i..j]
      substrs << substr
    end
  end

  substrs
end

def subwords(str, dict)
  strings = substrings(str)
  strings.select { |substr| dict.include?(substr) }
end
