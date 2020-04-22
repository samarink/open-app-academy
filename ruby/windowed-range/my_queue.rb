class MyQueue
  def initialize
    @store = []
  end

  def peek
    @store.last
  end

  def size
    @store.length
  end

  def empty?
    @store.empty?
  end

  def enqueue(el)
    @store << el
  end

  def dequeue
    @store.shift
  end
end
