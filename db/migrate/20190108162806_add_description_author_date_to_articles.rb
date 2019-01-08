class AddDescriptionAuthorDateToArticles < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :description, :string
    add_column :articles, :author, :string
    add_column :articles, :date, :string
  end
end
