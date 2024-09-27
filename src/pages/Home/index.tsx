import { NavLink } from "react-router-dom";
import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import { SummaryHome } from "./components/SummaryHome";
import { CardWrapper, HomeContainer } from "./styles";
import { ProfileContext } from "../../contexts/ProfileContext";
import { IssuesContext } from "../../contexts/IssuesContext";
import { useContextSelector } from "use-context-selector";
import { memo } from 'react'

function HomeComponent() {
    const profile = useContextSelector(ProfileContext, (context) => {
        return context.profile
    })
    const issues = useContextSelector(IssuesContext, (context) => {
        return context.issues
    })

    return (
        <HomeContainer>
            <SummaryHome
                img={profile.avatar_url}
                name={profile.login}
                githubUrl={profile.html_url}
                company={profile.company}
                followers={profile.followers}
                description={profile.bio}
                ></SummaryHome>
            <SearchBar quantity={issues.items.length}></SearchBar>

            <CardWrapper>
                {issues.items.map((card) => {
                    return (
                        <nav key={card.id}>
                            <NavLink to={`/post/${card.id}`}>
                                <Card title={card.title} content={card.body} createdAt={card.created_at}></Card>
                            </NavLink>
                        </nav>
                    )
                })}
            </CardWrapper>
        </HomeContainer>
    )
}

export const Home = memo(HomeComponent)