class CatRentalRequest < ApplicationRecord
  STATUS_STATES = %w(PENDING APPROVED DENIED).freeze

  validates :cat_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion: STATUS_STATES

  belongs_to :cat

  def overlapping_requests
    CatRentalRequest
      .where.not(id: self.id)
      .where(cat_id: cat_id)
      .where.not('start_date > :end_date OR end_date < :start_date',
                start_date: start_date, end_date: end_date)
  end

  def overlapping_approved_requests
    overlapping_requests.where('status = \'APPROVED\'')
  end

  def does_not_overlap_approved_request
    overlapping_approved_requests.exists?
  end
end
