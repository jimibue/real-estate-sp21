class Agent < ApplicationRecord
    has_many :buyers
    has_many :properties

    def self.by_property_count
        select("agents.id, first_name, last_name, email, COUNT(*) as frequency ")
        .joins("INNER JOIN properties p ON p.agent_id = agents.id")
        .where('sold <> true')
        .group('agents.id')
        .order('frequency desc')
    end
    # -- SELECT * from buyers
    # -- WHERE buyers.agent_id = 1;
    def self.get_buyers(agent_id)
        select('*')
        .from('buyers')
        .where('buyers.agent_id = ?', agent_id)
    end
end
