import { CreatePostForm } from './create-post-form'
import { PostList } from './post-list'
import { RecentPost } from './recent-post'

export default function PostsPage() {
	return (
		<div>
			<h1>Posts</h1>
			<CreatePostForm />
			<div>
				<PostList />
				<RecentPost />
			</div>
		</div>
	)
}
