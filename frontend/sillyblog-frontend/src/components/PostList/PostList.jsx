import PostItem from "../PostItem/PostItem"

import "./PostList.css"

const PostList = ({posts}) => {
    return(
        <div className="list">
            {
                posts.map(item => <PostItem post={item} key={item.id}/>) 
            }
        </div>
    )
}

export default PostList