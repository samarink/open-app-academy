class PolyTreeNode
  attr_accessor :value
  attr_reader :parent

  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def children
    @children.dup
  end

  def parent=(value)
    @parent = parent

  end
end
