require 'rails_helper'
require 'webdrivers'


# RSpec.describe "Correct Content and Path", type: :system do 
#   before do 
#     driven_by(:selenium_chrome)
#   end

#   it "logs in and is redirected to homepage" do 
#   visit("http://localhost:4000/login")

#   # log_in method is being called from rails_helper
#   log_in

#   expect(page).to have_current_path("/")
#   expect(page).to have_content("Home")
#   expect(page).to have_content("Welcome test")
#   expect(page).to have_content("Remaining Balance: $1700")
#   expect(page).to have_content("Select QB")
#   expect(page).to have_content("Select WR")
#   expect(page).to have_content("Select RB")
#   end
# end

RSpec.describe "Drafts players", type: :system do 
  before do 
    driven_by(:selenium_chrome)
  end

  it "drafts players" do
    visit("http://localhost:4000/login")
    log_in
    
    # draft Josh Allen for 
    find("[id=draft-button-qb-1]").click
    selectedQB_name = find("[id=selected-qb-name-1]")
      expect(selectedQB_name).to have_content("Josh Allen")
      expect(page).to have_content("Remaining Balance: $700")
    # sleep 1
    # draft Diontae Johnson
    find("[id=draft-button-wr-19]").click
    selectedWR_name = find("[id=selected-wr-name-19]")
      expect(selectedWR_name).to have_content("Diontae Johnson")
      expect(page).to have_content("Remaining Balance: $500")
    # sleep 1
    # draft Joe Mixon
    find("[id=draft-button-rb-26]").click
    selectedRB_name = find("[id=selected-rb-name-26]")
      expect(selectedRB_name).to have_content("Joe Mixon")
      expect(page).to have_content("Remaining Balance: $0")
    sleep 1
    # name & save your team
    within("#name-your-team") do 
      fill_in "Name Your Team", with: "test-team"
    end
    find("[id=draft-this-team-button]").click
    sleep 1
      expect(page).to have_current_path("/teams")
      expect(page).to have_content("Select Your Team")
    saved_Team_name = find("[id=user-team-name-test-team]")
      expect(saved_Team_name).to have_content("test-team")
    sleep 1



  end

  

end


