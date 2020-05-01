class UserMailer < ApplicationMailer
  default from: 'from@example.com'

  def welcome_email(user)
    @user = user
    mail(to: user.username, subject: 'Welcome to 99Cats Website')
  end
end
