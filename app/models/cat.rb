class Cat < ApplicationRecord
  validates :name, :personal_legend, presence: true
  validates :is_awesome, inclusion: { in: [true, false] }
end
