import IconText from "../IconText/IconText"
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import "./PostItem.css"

const PostItem = ({post}) => {
    return(
        <div class="post">
            <div className="top"> 
                <img className="topImg" src={post.avatar} alt=""></img>
                <div className="topUsername">
                    {post.username}
                </div>
            </div>
            <div className="content">{post.text}</div>
            <div className="bottom">
                <div className="icons">
                    <IconText icon={<FaRegHeart size={20}/>} text={post.likes} />
                    <IconText icon={<MdOutlineRemoveRedEye size={22}/>} text={post.views}/>
                </div>    
                <div className="date">
                    {post.date}
                </div>
                
            </div>
        </div>
    )
}

export default PostItem