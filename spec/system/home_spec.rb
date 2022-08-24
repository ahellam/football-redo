require 'rails_helper'
require 'webdrivers'


RSpec.describe "Correct Content and Path", type: :system do 
  before do 
    driven_by(:selenium_chrome)
  end

  it "logs in and is redirected to homepage" do 
  visit("http://localhost:4000/login")

  log_in

  expect(page).to have_current_path("/")
  expect(page).to have_content("Welcome test")
  end
end

