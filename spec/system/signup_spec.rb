# require 'rails_helper'
# require 'webdrivers'

# RSpec.describe "Correct Content and Path", type: :system do 
#   before do 
#     driven_by(:selenium_chrome)
#   end

#   it "checks content on page" do 
#     visit("http://localhost:4000/signup")
#     sleep 1
#     expect(page).to have_content("Sign up to get started")
#   end

#   it "clicks the button (that looks like link) and gets directed to log in page" do 
#     visit("http://localhost:4000/signup")
#     sleep 1
#     find("[id=link-to-login]").click
#     sleep 1
#     expect(page).to have_current_path("/login")
#     expect(page).to have_content("Log in to start drafting")
#   end

# end

# RSpec.describe "User Registration", type: :system do 
#   before do 
#     driven_by(:selenium_chrome)
#   end

#   it "signs up a new user" do 
#     #  !!! make sure to delete this user in postman after running a test because username will be taken if run twice !!!
#     visit("http://localhost:4000/signup")
#     within("#sign-up") do 
#       fill_in "username", with: "Anything"
#       fill_in "password", with: "Anything"
#     end
#     sleep 1
#     find("[id=sign-up-submit]").click
#     sleep 1
#     # next line clicks the ok on the alert box
#     page.driver.browser.switch_to.alert.accept
#     sleep 1
#     expect(page).to have_current_path("/login")
#     expect(page).to have_content("Log in to start drafting")
#   end

#   it "signs up with a username that is taken" do 
#     visit("http://localhost:4000/signup")
#     within("#sign-up") do 
#       fill_in "username", with: "Anything"
#       fill_in "password", with: "Anything"
#     end
#     sleep 1
#     find("[id=sign-up-submit]").click
#     sleep 1
#     expect(page).to have_content("Username has already been taken")
#   end

#   it "does not sign up with username and password" do 
#     visit("http://localhost:4000/signup")
#     within("#sign-up") do 
#       fill_in "username", with: ""
#       fill_in "password", with: ""
#     end
#     sleep 1
#     find("[id=sign-up-submit]").click
#     sleep 1
#     expect(page).to have_content("Please enter a username and password")
#   end

# end