class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude_coordinate, :longitude_coordinate

  has_many :attractions
  has_many :user_trips
  has_many :users, through: :user_trips
end
