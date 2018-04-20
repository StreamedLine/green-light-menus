require 'test_helper'

class AllergiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get allergies_index_url
    assert_response :success
  end

end
