class LRUCache
  def initialize(max_size)
    @max_size = max_size
    @entries = []
  end

  def count
    # returns number of elements currently in cache
    @entries.size
  end

  def add(el)
    # adds element to cache according to LRU principle
    if @entries.include?(el)
      @entries.delete(el)
      @entries << el
    elsif count >= @max_size
      @entries.shift
      @entries << el
    else
      @entries << el
    end
  end

  def show
    # shows the items in the cache, with the LRU item first
    p @entries
  end

  private
  # helper methods go here!

end
