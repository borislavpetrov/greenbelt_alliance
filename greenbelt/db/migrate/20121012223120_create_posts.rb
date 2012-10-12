class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.integer :project_id
      t.text :text
      t.timestamps
    end
  end
end