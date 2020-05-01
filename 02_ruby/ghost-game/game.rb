class Game
  def initialize
    words = File.readlines("dictionary.txt").map(&:chomp)
    @dictionary = Set.new words
    @players = []
    @fragment = ""
  end

  def current_player
    @players.first
  end

  def previous_player
    self.current_player == @players.first ? @players.last : @players.first
  end

  def next_player
    players.rotate!
  end

  def take_turn
  guess = gets.chomp until
        end
end
