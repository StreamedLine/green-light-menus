require 'test_helper'

class MenuItemsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get menu_items_index_url
    assert_response :success
  end

  test "should get show" do
    get menu_items_show_url
    assert_response :success
  end

  test "should get create" do
    get menu_items_create_url
    assert_response :success
  end

  test "should get update" do
    get menu_items_update_url
    assert_response :success
  end

  test "should get delete" do
    get menu_items_delete_url
    assert_response :success
  end

end
