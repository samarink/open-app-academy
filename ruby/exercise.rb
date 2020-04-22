def estimate_child_retirement_money(parent_age)
  child_age = parent_age / 2
  years_until_child_retire = 65 - child_age
  account_estimation = child_age ** 2

  account_estimation * years_until_child_retire
end

puts estimate_child_retirement_money(30) # 11250
puts estimate_child_retirement_money(50) # 25000

