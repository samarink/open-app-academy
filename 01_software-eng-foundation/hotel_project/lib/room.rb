class Room
  def initialize(capacity)
    @capacity = capacity
    @occupants = []
  end

  def capacity
    @capacity
  end

  def occupants
    @occupants
  end

  def full?
    @occupants.length < @capacity ? false : true
  end

  def available_space
    @capacity - @occupants.length
  end

  def add_occupant(name)
    if !self.full?
      @occupants << name
      true
    else
      false
    end
  end
end
