import { PostContentBody, PostContentContainer } from "./styles";

interface PostContentProps {
    content: string
}

export function PostContent(props: PostContentProps) {
    const { content } = props
    return (
        <PostContentContainer>
             <PostContentBody>{content}</PostContentBody>
        </PostContentContainer>
    )
}