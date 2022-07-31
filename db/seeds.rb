# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
puts " S E E D I N G . . . ."
# u1 = User.create(username: "aaron", password: "aaron")

po1 = Position.create(name: "QB")
po2 = Position.create(name: "WR")
po3 = Position.create(name: "RB")

def create_games(player_id, points)
  18.times do |i| 
    each_points = points[i]
  Game.create(
    player_id: player_id,
    week: i+1, 
    points: each_points
  )
  end
end

# =================================== QB ========================================

pl1 = Player.create(
  name: "Josh Allen", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/tllerqpaxoqygxsfo0qo",
  rank: 1,
  position_id: po1.id,
  price: 1000,
  canDelete: false,)
create_games(pl1.id, [17.2, 16.7, 37.2, 20.0, 36.5, 28.7, 0, 29.5, 9.6, 20.9, 16.2, 26.7, 11.7, 35.2, 20.8, 31.0, 20.9, 23.9])

pl2 = Player.create(
  name: "Tom Brady", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/n7fj5fjblf6pdgjdtphr",
  rank: 2,
  position_id: po1.id,
  price: 900,
  canDelete: false,)
create_games(pl2.id, [27.2, 29.6, 28.7, 11.1, 37.7, 18.0, 24.4, 25.2, 0, 13.0, 19.3, 11.2, 28.6, 30.1, 4.8, 14.4, 26.4, 25.0])

pl3 = Player.create(
  name: "Justin Herbert", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/jdvb4tvzxvfezif7kxlg",
  rank: 3,
  position_id: po1.id,
  price: 800,
  canDelete: false,)
create_games(pl3.id, [13.4, 14.7, 30.8, 21.3, 42.8, 11.0, 0, 13.8, 31.6, 12.0, 34.3, 19.7, 25.3, 24.9, 23.0, 16.9, 17.7, 27.4])

pl4 = Player.create(
  name: "Patrick Mahomes", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/tlg2oo5yrk6mins3nxxe",
  rank: 4,
  position_id: po1.id,
  price: 700,
  canDelete: false,)
create_games(pl4.id, [33.3, 24.0, 22.9, 31.7, 19.0, 23.0, 7.7, 14.0, 10.4, 36.2, 7.5, 0, 12.6, 20.3, 29.6, 22.3, 20.9, 26.2])

pl5 = Player.create(
  name: "Matthew Stafford", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/pxll35kun2cq2aeluaav",
  rank: 5,
  position_id: po1.id,
  price: 600,
  canDelete: false,)
create_games(pl5.id, [24.3, 17.2, 29.5, 19.3, 16.5, 25.2, 27.2, 24.2, 13.1, 9.8, 0, 22.0, 24.0, 23.5, 15.5, 6.7, 14.3, 17.5])

pl6 = Player.create(
  name: "Aaron Rodgers", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/hh8azxeqpydxofvo0suc",
  rank: 6,
  position_id: po1.id,
  price: 500,
  canDelete: false,)
create_games(pl6.id, [1.3, 26.8, 18.0, 24.1, 19.8, 23.7, 24.7, 15.7, 0, 10.5, 33.5, 26.3, 0, 29.6, 23.8, 20.0, 20.3, 14.2])

pl7 = Player.create(
  name: "Dak Prescott", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/yazkcmz5ke0rz11p3vbo",
  rank: 7,
  position_id: po1.id,
  price: 400,
  canDelete: false,)
create_games(pl7.id, [27.4, 7.5, 20.1, 27.0, 20.7, 26.8, 0, 0, 18.9, 26.3, 2.6, 25.3, 11.2, 9.9, 10.6, 31.3, 23.0, 31.8])

pl8 = Player.create(
  name: "Joe Burrow", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/fhvbn2cstui3nchv8vil",
  rank: 8,
  position_id: po1.id,
  price: 300,
  canDelete: false,)
create_games(pl8.id, [18.6, 10.3, 17.6, 22.3, 18.3, 22.8, 26.6, 20.3, 7.4, 0, 9.0, 16.4, 16.6, 22.2, 12.8, 38.1, 34.8, 0])

pl9 = Player.create(
  name: "Kirk Cousins", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/y2qsks5yreyona4bvb3b",
  rank: 9,
  position_id: po1.id,
  price: 200,
  canDelete: false,)
create_games(pl9.id, [22.0, 25.3, 25.1, 10.1, 13.4, 28.5, 0, 13.2, 21.6, 17.5, 25.2, 15.5, 20.2, 14.0, 10.5, 16.3, 0, 21.9])

pl10 = Player.create(
  name: "Kyler Murray", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/lu27xcnywfgzjq9vhvdl",
  rank: 10,
  position_id: po1.id,
  price: 100,
  canDelete: false,)
create_games(pl10.id, [33.6, 33.1, 18.5, 22.6, 13.7, 25.8, 21.4, 9.1, 0, 0, 0, 0, 30.8, 17.4, 12.6, 21.9, 22.9, 17.1])

# =================================== WR ========================================

pl11 = Player.create(
  name: "Cooper Kupp", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/jiaeufv3lpbkhulrddjq",
  rank: 1,
  position_id: po2.id,
  price: 1000,
  canDelete: false,)
create_games(pl11.id, [20.3, 32.3, 26.1, 8.9, 12.7, 29.5, 32.6, 21.0, 15.0, 17.7, 0, 15.1, 22.9, 24.8, 30.2, 16.3, 18.5, 23.1])

pl12 = Player.create(
  name: "Deebo Samuel", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/ccgevhaduyc9llngcnlu",
  rank: 2,
  position_id: po2.id,
  price: 900,
  canDelete: false,)
create_games(pl12.id, [27.4, 13.1, 7.7, 31.7, 14.6, 0, 17.5, 20.1, 8.8, 27.8, 15.9, 20.3, 0, 12.4, 16.9, 23.6, 15.7, 27.0])

pl13 = Player.create(
  name: "Davante Adams", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/hxerspgvszxel5frf2ez",
  rank: 3,
  position_id: po2.id,
  price: 800,
  canDelete: false,)
create_games(pl13.id, [8.1, 16.1, 25.2, 9.4, 32.1, 10.9, 16.6, 0, 7.2, 11.3, 27.0, 14.4, 0, 29.1, 13.4, 28.4, 25.1, 8.5])

pl14 = Player.create(
  name: "Justin Jefferson", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/o2f0n7bi0rlvx0hgpspz",
  rank: 4,
  position_id: po2.id,
  price: 700,
  canDelete: false,)
create_games(pl14.id, [10.0, 15.5, 22.3, 17.4, 15.9, 10.0, 0, 3.1, 15.5, 18.4, 33.2, 11.3, 30.1, 17.0, 12.7, 15.6, 8.8, 19.6])

pl15 = Player.create(
  name: "Ja'Marr Chase", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/fxclfdx8fz5cbuep6ngd",
  rank: 5,
  position_id: po2.id,
  price: 600,
  canDelete: false,)
create_games(pl15.id, [18.4, 12.4, 20.5, 10.7, 24.9, 11.7, 30.1, 11.6, 5.9, 0, 11.5, 5.4, 7.7, 22.8, 0.8, 16.0, 50.1, 3.6])

pl16 = Player.create(
  name: "Tyreek Hill", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/xw0jhb7zeobj4bkxfpwg",
  rank: 6,
  position_id: po2.id,
  price: 500,
  canDelete: false,)
create_games(pl16.id, [31.6, 4.4, 7.2, 42.1, 11.3, 18.1, 9.7, 21.4, 5.3, 24.0, 15.5, 0, 3.2, 9.6, 26.8, 2.9, 7.2, 0.7])

pl17 = Player.create(
  name: "Stefon Diggs", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/hcvd2avk0kufoli80veb",
  rank: 7,
  position_id: po2.id,
  price: 400,
  canDelete: false,)
create_games(pl17.id, [11.4, 14.0, 9.2, 14.9, 7.9, 19.4, 0, 12.5, 11.5, 26.2, 16.3, 16.9, 7.1, 10.9, 11.5, 18.0, 7.7, 18.6])

pl18 = Player.create(
  name: "Mike Evans", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/hp7exmuqylysgife5p9m",
  rank: 8,
  position_id: po2.id,
  price: 300,
  canDelete: false,)
create_games(pl18.id, [3.9, 22.0, 14.6, 11.0, 26.3, 3.7, 28.6, 11.8, 0, 13.2, 17.3, 3.1, 13.4, 18.1, 1.9, 0, 12.7, 23.9])

pl19 = Player.create(
  name: "Diontae Johnson", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/kpxblj81lquuhjasvhe8",
  rank: 9,
  position_id: po2.id,
  price: 200,
  canDelete: false,)
create_games(pl19.id, [12.1, 15.0, 0, 19.7, 14.2, 14.1, 0, 12.8, 9.2, 9.8, 19.6, 14.0, 26.5, 12.8, 7.3, 12.1, 13.1, 8.6])

pl20 = Player.create(
  name: "Mike Williams", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/mjon6c2fwtnxbmdfoxcu",
  rank: 10,
  position_id: po2.id,
  price: 100,
  canDelete: false,)
create_games(pl20.id, [18.2, 18.6, 29.7, 1.6, 32.5, 3.7, 0, 2.9, 6.8, 5.3, 18.2, 5.9, 13.5, 9.1, 6.4, 0, 13.8, 22.4])

# =================================== RB ========================================

pl21 = Player.create(
  name: "Jonathan Taylor", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/vrssfndxep2hftp5l9qa",
  rank: 1,
  position_id: po3.id,
  price: 1000,
  canDelete: false,)
create_games(pl21.id, [14.6, 5.8, 7.7, 18.9, 30.4, 28.3, 16.5, 19.7, 33.0, 21.6, 51.9, 17.7, 24.3, 0, 23.0, 10.8, 17.9, 11.0])

pl22 = Player.create(
  name: "Christian McInjury", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/rmrohuw9tgfqlolewzvx",
  rank: 2,
  position_id: po3.id,
  price: 900,
  canDelete: false,)
create_games(pl22.id, [23.2, 22.2, 5.0, 0, 0, 0, 0, 0, 12.6, 21.1, 21.4, 3.5, 0, 0, 0, 0, 0, 0])

pl23 = Player.create(
  name: "Austin Eckler", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/qe96pmvovsmoq26f8pcr",
  rank: 3,
  position_id: po3.id,
  price: 800,
  canDelete: false,)
create_games(pl23.id, [11.7, 18.0 , 19.7, 28.0, 30.4, 7.5, 0, 21.4, 9.7, 13.4, 38.5, 18.9, 14.9, 15.4, 16.2, 0, 18.7, 26.4])

pl24 = Player.create(
  name: "Derrick Henjury", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/ved7bttliyuaps02d77d",
  rank: 4,
  position_id: po3.id,
  price: 700,
  canDelete: false,)
create_games(pl24.id, [9.2, 44.7, 17.9, 24.7, 31.0, 34.6, 15.4, 6.8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

pl25 = Player.create(
  name: "Dalvin Cook", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/eb7vfxsratwcfr03ufau",
  rank: 5,
  position_id: po3.id,
  price: 600,
  canDelete: false,)
create_games(pl25.id, [17.4, 15.8, 0, 5.4, 0, 21.3, 0, 7.8, 13.7, 19.3, 21.0, 11.3, 0, 34.7, 10.1, 0, 2.8, 8.7])

pl26 = Player.create(
  name: "Joe Mixon", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/pucb3gqsidpxzivdp9hd",
  rank: 6,
  position_id: po3.id,
  price: 500,
  canDelete: false,)
create_games(pl26.id, [23.0, 7.6, 9.9, 13.2, 10.0, 23.8, 11.9, 23.1, 25.5, 0, 24.3, 30.3, 9.4, 7.8, 6.5, 28.5, 12.1, 0])

pl27 = Player.create(
  name: "D'Andre Swift", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/lt7dpkcsisbq1txestzs",
  rank: 7,
  position_id: po3.id,
  price: 400,
  canDelete: false,)
create_games(pl27.id, [20.4, 9.8, 20.2, 6.9, 19.4, 15.2, 24.4, 5.6, 0, 15.0, 21.1, 2.4, 0, 0, 0, 0, 4.9, 12.6])

pl28 = Player.create(
  name: "Leonard Fournette", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/jcmgyeiruehjjdpfkyf4",
  rank: 8,
  position_id: po3.id,
  price: 300,
  canDelete: false,)
create_games(pl28.id, [8.4, 9.6, 4.9, 15.3, 19.0, 27.7, 16.0, 5.8, 0, 13.2, 10.4, 40.6, 18.7, 21.2, 10.2, 0, 0, 0])

pl29 = Player.create(
  name: "Najee Harris", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/lwcct10u7lfzsgtaoqce",
  rank: 9,
  position_id: po3.id,
  price: 200,
  canDelete: false,)
create_games(pl29.id, [5.4, 16.6, 21.2, 18.1, 21.2, 21.7, 0, 19.5, 15.3, 15.3, 14.4, 5.2, 13.2, 23.9, 3.6, 13.5, 28.1, 7.5])

pl30 = Player.create(
  name: "James Conner", 
  image: "https://static.www.nfl.com/image/private/t_player_profile_landscape_2x/f_auto/league/nq7mtvvxmgc2vukwwcpo",
  rank: 10,
  position_id: po3.id,
  price: 100,
  canDelete: false,)
create_games(pl30.id, [5.3, 2.6, 17.8, 19.6, 10.2, 7.6, 12.4, 14.2, 37.8, 13.9, 18.4, 0, 18.1, 29, 8, 0, 0, 24.3])