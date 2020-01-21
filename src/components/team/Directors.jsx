import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Container from '../shared/Container'
import RowWrapper from '../shared/RowWrapper'
import GreyH3 from '../shared/GreyH3'
import ColumnWrapper from '../shared/ColumnWrapper'

const ColourDiv = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    max-width: 1900px;
    margin-left: auto;
    margin-right: auto;
`

const Wrapper = styled(RowWrapper)`
    margin-left: auto;
    margin-right: auto;
    justify-content: flex-start;
`

const LeftWrapper = styled(RowWrapper)`
    width: 19rem;
    max-width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
`

const NameWrapper = styled(RowWrapper)`
    justify-content: flex-start;
    max-width: fit-content;
`

const MultipleNameWrapper = styled(ColumnWrapper)`
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 2rem;
`

const DirectorWrapper = styled(ColumnWrapper)`
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 19rem;
    border-top: 0.5rem solid rgb(137, 234, 234);
    border-bottom: 0.5rem solid rgb(137, 234, 234);
    padding: 2.5rem 0;
`

const Directors = () => {
    const { sanityTeam } = useStaticQuery(graphql`
        query DirectorsQuery {
            sanityTeam {
                directors {
                    furigana
                    name {
                      ja
                    }
                    role {
                      ja
                    }
                }
            }
        }
    `)

    const roles = sanityTeam.directors.map(director => director.role.ja)
    const uniqueRoles = [...new Set(roles)]

    return (
        <ColourDiv>
            <Container>
                <DirectorWrapper>
                    {uniqueRoles.map(role => (
                        <Wrapper key={role}>
                            <LeftWrapper>
                                <NameWrapper>
                                    <GreyH3>{role}</GreyH3>
                                </NameWrapper>
                                <MultipleNameWrapper>
                                    {sanityTeam.directors.map(director => director.role.ja === role ?
                                        <GreyH3>  {director.name.ja}</GreyH3>
                                        :
                                        null
                                    )}
                                </MultipleNameWrapper>
                            </LeftWrapper>
                        </Wrapper>
                    ))}
                </DirectorWrapper>
            </Container>
        </ColourDiv>
    )
}

export default Directors
