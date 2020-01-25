import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ColumnWrapper from './shared/ColumnWrapper'
import RowWrapper from './shared/RowWrapper'
import ContainerCentre from './shared/ContainerCentre'

const ReportsWrapper = styled(RowWrapper)`
    justify-content: flex-start;
    flex-wrap: wrap;
`

const StyledImage = styled(Img)`
    max-height: 340px;
    min-width: 100%;
    margin-bottom: 1rem;
`

const ReportWrapper = styled(ColumnWrapper)`
    margin: 0 2rem 2rem 2rem;
    min-width: 240px;
`

const Download = styled('a')`
    cursor: pointer;
    text-decoration: none;
    color: black;

    :hover, :active, :visited {
        text-decoration: none;
        color: black;
    }
`

const BoldText = styled('p')`
    font-weight: 600;
`

const Reports = () => {
    const { sanityReports } = useStaticQuery(graphql`
        query ReportsQuery {
            sanityReports {
            reports {
                image {
                caption {
                    ja
                }
                image {
                    asset {
                    fluid {
                        ...GatsbySanityImageFluid
                    }
                    }
                }
                }
                report {
                asset {
                    url
                }
                }
                title {
                ja
                }
            }
            }
        }
    `)

    return (
        <ContainerCentre>
            <ReportsWrapper>
                {sanityReports.reports.map(report =>
                    <Download href={report.report.asset.url} download target='_blank'>
                        <ReportWrapper>
                            <StyledImage fluid={report.image.image.asset.fluid} alt={report.image.caption.ja} />
                            <BoldText>{report.title.ja}</BoldText>
                        </ReportWrapper>
                    </Download>
                )}
            </ReportsWrapper>
        </ContainerCentre>
    )
}

export default Reports
