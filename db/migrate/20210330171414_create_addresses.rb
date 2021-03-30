class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.string :city
      t.string :street
      t.string :zip
      t.string :state
      t.belongs_to :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end
