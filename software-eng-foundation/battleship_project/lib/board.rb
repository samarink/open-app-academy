class Board
  attr_reader :size

  def self.print_grid(grid)
    grid.each do |row|
      puts row.join(" ")
    end
  end

  def initialize(number)
    @grid = Array.new(number) { Array.new(number, :N) }
    @size = number * number
  end

  def [](position)
    row, col = position
    @grid[row][col]
  end

  def []=(position, element)
    row, col = position
    @grid[row][col] = element
  end

  def num_ships
    @grid.flatten.count { |el| el == :S }
  end

  def attack(position)
    if self[position] == :S
      self[position] = :H
      puts "you sunk my battleship"
      true
    else
      self[position] = :X
      false
    end
  end

  def place_random_ships
    total_ships = @size * 0.25

    while self.num_ships < total_ships
     rand_row = rand(0...@grid.length)
     rand_col = rand(0...@grid.length)
     position = [rand_row, rand_col]
     self[position] = :S
    end
  end

  def hidden_ships_grid
    @grid.map do |row|
      row.map do |el|
        if el == :S
          :N
        else
          el
        end
      end
    end
  end

  def cheat
    Board.print_grid(@grid)
  end

  def print
    Board.print_grid(self.hidden_ships_grid)
  end
end
