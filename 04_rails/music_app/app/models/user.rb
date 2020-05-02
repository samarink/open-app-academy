class User < ApplicationRecord
  attr_reader :password

  validates :password, length: { minimun: 6, allow_nil: true }
  validates :email,
            :password_digest,
            :session_token,
            presence: true

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    token = SecureRandom::urlsafe_base64(16)

    while self.class.exists?(session_token: token)
      token = SecureRandom::urlsafe_base64(16)
    end

    token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!

    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def password=(password)
    @password = password
    password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
