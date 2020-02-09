import React from 'react'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import YellowTitle from '../components/YellowTitle'
import OurActivities from '../components/OurActivities'
import Profiles from '../components/team/Profiles'
import Directors from '../components/team/Directors'
import Team from '../components/team/Team'

const TeamPage = () => (
  <Layout>
    <SEO title='Team' />
    <YellowTitle title='チーム' />
    <Profiles />
    <Directors />
    <Team />
    <OurActivities />
  </Layout>
)

export default TeamPage
