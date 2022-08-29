# require 'rails_helper'
# require 'webdrivers'
# require 'pry'

# RSpec.describe "teams", type: :system do 
#   before do 
#     driven_by(:selenium_chrome)
#   end

#   it "checks correct path and content" do 
#     visit("http://localhost:4000/login")
#     log_in

#     find("[id=teams-link]").click
#     expect(page).to have_current_path("/teams")
#   end

#   it "selects teams functionality" do 
#     visit("http://localhost:4000/login")
#     log_in
#     find("[id=teams-link]").click
#     sleep 1

#     find("[id=select-user-team-dont-delete-this]").click
#     selected_user_team = find("[id=selected-user-team-name-dont-delete-this]")
#     expect(selected_user_team).to have_content("dont-delete-this")

#     find("[id=select-opponent-team-aarons-bengals]").click
#     selected_opponent_team = find("[id=selected-opponent-team-name-aarons-bengals]")
#     expect(selected_opponent_team).to have_content("aarons-bengals")

#     click on the Play Random Week button and see content
#     find("[id=play-random-week-button]").click
#     sleep 1
#     #  ----- users team info ------
#     user_random_total = find("[id=random-user-pts-total]").text.to_f
#     expect(page).to have_content("Total: #{user_random_total} pts")
#     win_or_lose_left = find("[id=who-won-left]").text
#     expect(win_or_lose_left).to eq("WINNER") | eq("LOSER")
#     #  ----- opponents team info ------
#     opponent_random_total = find("[id=random-opponent-pts-total]").text.to_f
#     expect(page).to have_content("Total: #{opponent_random_total} pts")
#     win_or_lose_right = find("[id=who-won-right]").text
#     expect(win_or_lose_right).to eq("WINNER") | eq("LOSER")
#     # click clear games button and assert button disappears
#     clear_games_button = find("[id=clear-games-button]")
#     expect(clear_games_button).to have_content("Clear Games")
#     clear_games_button.click
#     expect(page).not_to have_content(clear_games_button)

#     # click Play Full Season button and see content
#     find("[id=play-full-season-button]").click
#     user_total_wins = find("[id=user-season-total-wins]")
#     user_total_points = find("[id=user-season-total-points]")
#     opponent_total_wins = find("[id=opponent-season-total-wins]")
#     opponent_total_points = find("[id=opponent-season-total-points]")
#     who_won_season = find("[id=who-won-season]")
#     clear_season_button = find("[id=clear-season-button]")
#     sleep 1

#     expect(page).to have_content(user_total_wins.text)
#     expect(page).to have_content(user_total_points.text)
#     expect(page).to have_content(opponent_total_wins.text)
#     expect(page).to have_content(opponent_total_points.text)
#     expect(who_won_season.text).to eq("YOU WIN!") | eq("OPPONENT WINS!")

#     # click the Clear Season button
#     clear_season_button.click
#     sleep 1
#     expect(page).not_to have_content(user_total_wins)
#     expect(page).not_to have_content(user_total_points)
#     expect(page).not_to have_content(opponent_total_wins)
#     expect(page).not_to have_content(opponent_total_points)
#   end
# end