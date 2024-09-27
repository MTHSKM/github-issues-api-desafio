import { useParams } from "react-router-dom";
import { SummaryPost } from "./components/SummaryPost";
import { PostContent } from "./components/PostContent";
import { IssuesContext } from "../../contexts/IssuesContext";
import { useContextSelector } from "use-context-selector";


export function Post() {
    const { arrayId } = useParams()
    const issues = useContextSelector(IssuesContext, (context) => {
        return context.issues
    })

    const filteredAray = issues.items.filter((item) => item.id === Number(arrayId))

    const issueItem = filteredAray[0]

    return (
        <div>
            <SummaryPost 
            title={issueItem.title} 
            created_at={issueItem.created_at}
            user={issueItem.user.login}
            comments={issueItem.comments}
            html_url={issueItem.html_url}
            user_url={issueItem.user.html_url}
            ></SummaryPost>
            <PostContent content={issueItem.body}></PostContent>
        </div>
    )
}