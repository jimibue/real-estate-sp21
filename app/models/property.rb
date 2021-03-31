class Property < ApplicationRecord
  belongs_to :agent
  has_one :address

# SELECT p.id AS property_id, p.beds, p.baths, p.sq_ft, p.price, p.sold, a.email, a.id AS agent_id, a.first_name, a.last_name, ad.city
# FROM properties AS p
# INNER JOIN agents AS a ON a.id = p.agent_id
# INNER JOIN addresses AS ad ON ad.property_id = p.id
# WHERE p.sold <> TRUE
# ORDER BY a.id
  def self.available
    select('p.id AS property_id, p.beds, p.baths, p.sq_ft, p.price, p.sold, a.email, a.id AS agent_id, a.first_name, a.last_name, ad.city')
    .from('properties AS p')
    .joins("INNER JOIN agents AS a ON a.id = p.agent_id
            INNER JOIN addresses AS ad ON ad.property_id = p.id")
    .where('p.sold <> TRUE') 
    .order('a.id')       
  end

#   -- SELECT p.id, p.beds, p.baths, p.sq_ft, p.price, a.city, a.street, p.sold
# -- FROM properties p
# -- INNER JOIN addresses a ON a.property_id = p.id
# -- WHERE LOWER(a.city) = 'sandy' AND p.sold <> TRUE
  def self.by_city(city)
    select("p.id, p.beds, p.baths, p.sq_ft, p.price, a.city, a.street, p.sold")
    .from('properties AS p')
    .joins('INNER JOIN addresses a ON a.property_id = p.id')
    .where("LOWER(a.city) = ? AND p.sold <> TRUE", city.downcase)
  end
end
