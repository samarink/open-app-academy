class User < ApplicationRecord
  validates :username, presence: true, uniquiness: true
end
