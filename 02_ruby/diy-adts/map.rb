class Map
  def initialize
    @map = []
  end

  def set(key, value)
    changed = false

    @map.each do |entry|
      if entry.first == key
        entry[-1] = value
        changed = true
        return value
      end
    end

    @map << [key, value] unless changed
  end

  def get(key)
    @map.each do |entry|
      return entry.last if entry.first == key
    end

    nil
  end

  def delete(key)
    @map.delete_if { |entry| entry.first == key }
  end

  def show
    @map
  end
end
