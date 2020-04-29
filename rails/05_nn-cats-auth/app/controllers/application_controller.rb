class ApplicationController < ActionController::Base
  helper_method :current_user

  def current_user
    return nil unless session[:session_token]
    @user ||= User.find_by(session_token: session[:session_token])
  end

  def logout_user!
    if current_user
      current_user.reset_session_token!
      session[session_token] = nil
    end
  end
end
