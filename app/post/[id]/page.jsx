
import Post from "@/app/components/Post"


export async function generateMetadata({params, searchParams}) {
    const post = await postsFetch(params.id);
    return {
        title: post.title,
        description: post.body
    }
}

async function postsFetch(id) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = await res.json();
    return data;
}


async function PagePost({params: {id}}) {
    const post = await postsFetch(id);

    return(
        <>
            <div className="post">
                <Post post={post}/>
            </div>
        </>
    )
}

export default PagePost;