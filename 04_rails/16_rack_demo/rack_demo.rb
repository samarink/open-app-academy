require 'rack'
require 'json'

class RackApplication
  def self.call(env)
    ['200', {'Content-Type' => 'text/html'}, ['Hey there']]
  end
end

class SimpleApp
  def self.call(env)
    req = Rack::Request.new(env)
    res = Rack::Response.new

    name = req.params['name']

    res.write("Hello #{name}")
    res.finish
  end
end

class CookieApp
  def self.call(env)
    req = Rack::Request.new(env)
    res = Rack::Response.new

    food = req.params['food']
    if food
      res.set_cookie(
        '_my_cookie_app',
        {
         path: '/',
         value: {food: food}.to_json
        })
    else
      cookie = req.cookies['_my_cookie_app']
      cookie_val = JSON.parse(cookie)
      food = cookie_val['food']
      res.write("your fav food is a #{food}")
    end

    res.finish
  end
end

app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new

  if req.path.start_with?('/cage')
    res.status = 302
    res['location'] = 'http://duckduckgo.com'
  else
    res.write('nothing here')
  end

  res.finish
end

Rack::Server.start({
  app: app,
  port: 3000
})
