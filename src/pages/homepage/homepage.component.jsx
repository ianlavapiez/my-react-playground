import React, { Profiler } from 'react'

import DirectoryContainer from '../../components/directory/directory.container'

import { HomePageContainer } from './homepage.styles'

const HomePage = () => (
  <HomePageContainer>
    <Profiler
      id='Directory'
      onRender={(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration,
        })
      }}
    >
      <DirectoryContainer />
    </Profiler>
  </HomePageContainer>
)

export default HomePage
