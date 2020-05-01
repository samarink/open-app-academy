class Code
  POSSIBLE_PEGS = {
    "R" => :red,
    "G" => :green,
    "B" => :blue,
    "Y" => :yellow
  }

  attr_reader :pegs

  def self.valid_pegs?(arr)
    arr.all? { |el| POSSIBLE_PEGS.has_key?(el.upcase) }
  end

  def self.random(length)
    Code.new Array.new(length) { POSSIBLE_PEGS.keys.sample }
  end

  def self.from_string(str)
    Code.new(str.split(""))
  end

  def initialize(arr)
    if Code.valid_pegs?(arr)
      @pegs = arr.map(&:upcase)
    else
      raise "error"
    end
  end

  def [](index)
    @pegs[index]
  end

  def length
    @pegs.length
  end

  def num_exact_matches(code_guess)
    count = 0

    (0...code_guess.length).each do |i|
      count += 1 if code_guess[i] == @pegs[i]
    end

    count
  end

  def num_near_matches(code_guess)
    count = 0
    
    (0...code_guess.length).each do |i|
      count += 1 if code_guess[i] != @pegs[i] && self.pegs.include?(code_guess[i])
    end

    count
  end

  def ==(another_code)
    @pegs == another_code.pegs
  end
end
