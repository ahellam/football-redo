require 'rails_helper'
require 'webdrivers'

# RSpec.describe "Correct Content and Path", type: :system do 
#   before do 
#     driven_by(:selenium_chrome)
#   end

#   it "checks content on page" do 
#     visit("http://localhost:4000/login")
#     sleep 1
#     expect(page).to have_content("Log in to start drafting")
#   end

#   it "clicks the button (that looks like link) and gets directed to sign up page" do 
#     visit("http://localhost:4000/login")
#     sleep 1
#     find("[id=link-to-signup]").click
#     sleep 1
#     expect(page).to have_current_path("/signup")
#     expect(page).to have_content("Sign up to get started")
#   end

# end

# RSpec.describe "Incorrectly Logging In A User", type: :system do 
#   before do 
#     driven_by(:selenium_chrome)
#   end

#   it "leaves username and password blank" do 
#     visit("http://localhost:4000/login")

#     within("#log-in") do 
#       fill_in "username", with: ""
#       fill_in "password", with: ""
#     end
#     sleep 1
#     find("[id=log-in-button]").click
#     sleep 1
#     expect(page).to have_content("Invalid username or password.")
#   end

#   it "enters invalid username and password" do 
#     visit("http://localhost:4000/login")

#     within("#log-in") do 
#       fill_in "username", with: "sdfsdfsdfsdhj"
#       fill_in "password", with: "ksjdhcsouefkh"
#     end
#     sleep 1
#     find("[id=log-in-button]").click
#     sleep 1
#     expect(page).to have_content("Invalid username or password.")
#   end
# end

# RSpec.describe "Successfully Logging In A User", type: :system do 
#   before do 
#     driven_by(:selenium_chrome)
#   end

#   it "enters valid username and password" do 
#     visit("http://localhost:4000/login")

#     within("#log-in") do 
#       fill_in "username", with: "test"
#       fill_in "password", with: "test"
#     end
#     sleep 1
#     find("[id=log-in-button]").click
#     sleep 1 
#     expect(page).to have_current_path("/")
#     expect(page).to have_content("Welcome test")
#     expect(page).to have_content("Select QB")
#     expect(page).to have_content("Select WR")
#     expect(page).to have_content("Select RB")
#   end
  
# end