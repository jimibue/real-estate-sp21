class Address < ApplicationRecord
  belongs_to :property

  # SELECT DISTINCT city FROM addresses;
  def self.city_list
    select('DISTINCT city')
  end
end
