class Location < ApplicationRecord
  has_many :attractions
  has_many :user_trips
  has_many :users, through: :user_trips

end
