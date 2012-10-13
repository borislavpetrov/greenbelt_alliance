class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.integer :user_id
      t.float :latitude
      t.float :longitude
      t.string :name
      t.text :description
      t.text :solution
      t.timestamps
    end
  end
end
