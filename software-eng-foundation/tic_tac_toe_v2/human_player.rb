class HumanPlayer
  attr_reader :mark

  def initialize(mark)
    @mark = mark
  end

  def get_position
    puts "place a pos for #{@mark.to_s}"
    pos = gets.chomp.split(" ").map(&:to_i)
    raise "invalid position" if pos.length != 2
    pos
  end
end
