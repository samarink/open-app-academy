require "employee"

class Startup
  attr_reader :name, :funding, :salaries, :employees

  def initialize(name, funding, salaries)
    @name = name
    @funding = funding
    @salaries = salaries
    @employees = []
  end

  def valid_title?(title)
    @salaries.keys.include?(title)
  end

  def >(startup)
    self.funding > startup.funding
  end

  def hire(name, title)
    if valid_title?(title)
      @employees << Employee.new(name, title)
    else
      raise "Invalid title"
    end
  end

  def size
    @employees.length
  end

  def pay_employee(employee)
    salary = @salaries[employee.title]

    if @funding >= salary
      employee.pay(salary)
      @funding -= salary
    else
      raise "Not enough fundings"
    end
  end

  def payday
    @employees.each do |employee|
      self.pay_employee(employee)
    end
  end

  def average_salary
    total = 0

    @employees.each do |employee|
      total += @salaries[employee.title]
    end

    total / @employees.length.to_f
  end

  def close
    @employees = []
    @funding = 0
  end

  def acquire(startup)
    @funding += startup.funding
    
    startup.salaries.each do |title, salary|
      @salaries[title] = salary if !@salaries.has_key?(title)
    end

    @employees += startup.employees

    startup.close
  end
end
