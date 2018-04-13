require 'test_helper'

class MenusControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get menus_index_url
    assert_response :success
  end

  test "should get show" do
    get menus_show_url
    assert_response :success
  end

  test "should get create" do
    get menus_create_url
    assert_response :success
  end

  test "should get update" do
    get menus_update_url
    assert_response :success
  end

  test "should get delete" do
    get menus_delete_url
    assert_response :success
  end

end
