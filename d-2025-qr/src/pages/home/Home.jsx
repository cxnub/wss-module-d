import { useEffect, useMemo, useRef, useState } from "react"
import "bootstrap-icons/icons/heart.svg";
import Post from "./Post";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [loaded, setLoaded] = useState(0);
    const loader = useRef(null);

    const observer = useMemo(() => new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            setLoaded(prev => prev + 5);
            observer.unobserve(entries[0].target);
        }
    }, { threshold: 1 }), []);


    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch('https://mocki.io/v1/56029e01-f435-4b2c-896d-b5cbaaab4356');
            const posts = await res.json();
            setPosts(posts.posts);
            setLoaded(5);
        }

        getPosts();
    }, []);

    useEffect(() => {
        observer.observe(loader.current);
    }, [observer, loaded])


    return <div className="post-container">
        {
            posts.slice(0, loaded).map((post) => {
                return <Post post={post} key={[post.post_id]} />
            })
        }

        <div className="spinner-border" ref={loader} id="loader" role="status">
            <span className="visually-hidden">Loading...</span>

        </div>
        </div>
}