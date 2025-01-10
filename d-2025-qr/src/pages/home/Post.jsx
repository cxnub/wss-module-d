
import { Button, Card, CardBody, CardFooter, CardImg, CardText, CardTitle } from "react-bootstrap";

export default function Post({ post }) {
    return (<Card className="postcard">
        <CardBody className="postcard-body">
            <CardTitle>{post.content}</CardTitle>
            <CardImg className="card-img-top" src={post.images[0]}></CardImg>
            <div className="card-bottom">
                <CardFooter>By {post.username}</CardFooter>
            </div>
            
        </CardBody>
    </Card>);
}