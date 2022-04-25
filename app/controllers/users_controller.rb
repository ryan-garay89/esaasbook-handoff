class UsersController < ApplicationController
	before_action :authenticate_user!
	def show
		@user = current_user
		@annotations = @user.page_annotations
		@chapter_id = 0
		@section_id = -1
		@body_contents = 'user_page'

		render('main_content')
	end

end