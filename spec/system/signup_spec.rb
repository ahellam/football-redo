require 'rails_helper'
require 'webdrivers'

RSpec.describe "Correct text on page", type: :system do 
  before do 
    driven_by(:selenium_chrome)
  end

  it "checks content on page" do 
    visit("http://localhost:4000/signup")
    sleep 1
    expect(page).to have_content("Sign up to get started")
  end

  it "clicks the button (that looks like link) and gets directed to log in page" do 
    visit("http://localhost:4000/signup")
    sleep 1
    find('[id=link-to-login]').click
    sleep 1
    expect(page).to have_content("Log in to start drafting")
  end

end