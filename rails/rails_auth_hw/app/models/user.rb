class User < ApplicationRecord
  validates :username, :session_token, presence: true
  validates :password_digest, presence: { message: 'Password can\'t be blank' }
  validates :password, length: { minimun: 6, allow_nil: true }
  before_validation :ensure_session_token
end
