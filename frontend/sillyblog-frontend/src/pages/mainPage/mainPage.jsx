import PostList from "../../components/PostList/PostList"



const MainPage = () => {
    const posts = [
        {
            id: 1,
            avatar: "./img/troll.png",
            username: "test user",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus facere aperiam harum commodi soluta magni facilis, sint voluptatem doloremque?",
            likes: 560,
            views: 12,
            date: "10.04.2024"
        },
        {
            id: 2,
            avatar: "./img/troll.png",
            username: "Vlad",
            text: "Lorem ipsum dolor sit 987239827985 90237 907923 97435 amet consectetur adipisicing elit. Aspernatur doloribus facere aperiam harum commodi soluta magni facilis, sint voluptatem doloremque?",
            likes: 1123,
            views: 11,
            date: "10.44.2024"
        },
        {
            id: 3,
            avatar: "./img/troll.png",
            username: "Dima",
            text: "AAAAAAAAAAAAALorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus facere aperiam harum commodi soluta magni facilis, sint voluptatem doloremque?",
            likes: 1000,
            views: 12123451,
            date: "10.04.20024"
        },
        {
            id: 4,
            avatar: "./img/troll.png",
            username: "NEVER",
            text: "Lorem ipsum doloremque?",
            likes: 1,
            views: 10,
            date: "01.04.2024"
        },
    ]
    return(
        <div>
            <PostList posts={posts} />
        </div>
    )
}

export default MainPage