require 'rails_helper'
require 'webdrivers'

RSpec.describe "teams", type: :system do 
  before do 
    driven_by(:selenium_chrome)
  end

  it "checks correct path and content" do 
    visit("http://localhost:4000/login")
    log_in

    find("[id=teams-link]").click
    expect(page).to have_current_path("/teams")
  end



end