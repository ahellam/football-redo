# module LoginHelper
#   def log_in
#     visit("http://localhost:4000/login")
#     within("#log-in") do 
#       fill_in "username", with: "test"
#       fill_in "password", with: "test"
#     end
#   find("[id=log-in-button]").click
#   end
# end

# Rspec.configure do |config|
#   config.include LoginHelper, type: :system
# end