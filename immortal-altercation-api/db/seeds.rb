# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

SubZero = Combatant.find_or_create_by({name: 'Sub Zero', img_url: 'https://upload.wikimedia.org/wikipedia/en/a/a7/SubZeroMKXrender.png', hp: 100})

SubZeroAbility1 = Ability.find_or_create_by({
    name: 'Punch',
    image: 'data:image/png;base64,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', 
    damage: 5, 
    combatant_id: 1})

SubZeroAbility2 = Ability.find_or_create_by({
    name: 'Ice Ball',
    image: 'https://zilliongamer.com/uploads/mortal-kombat-11/article/character-roster/sub-zero/sub-zero-deep-freeze.jpg', 
    damage: 5, 
    combatant_id:  1})

SubZeroAbility3 = Ability.find_or_create_by({
    name: 'Kick',
    image: 'data:image/png;base64,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', 
    damage: 5, 
    combatant_id: 1})

SubZeroAbility4 = Ability.find_or_create_by({
    name: 'Warthog',
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/89be5802-0a9f-45b2-855d-76e00501f065/d9e40zi-3c228fc3-dea3-42b3-a5cb-9ec0f2c2ad2f.png/v1/fill/w_395,h_253,q_80,strp/sub_zero_ice_shatter_fatality_by_enderspriter_d9e40zi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yNTMiLCJwYXRoIjoiXC9mXC84OWJlNTgwMi0wYTlmLTQ1YjItODU1ZC03NmUwMDUwMWYwNjVcL2Q5ZTQwemktM2MyMjhmYzMtZGVhMy00MmIzLWE1Y2ItOWVjMGYyYzJhZDJmLnBuZyIsIndpZHRoIjoiPD0zOTUifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.esagiv63-K8eAo_LBTkLzJ06rijXumIgPb4ITX5W4S0', 
    damage: 5, 
    combatant_id: 1})