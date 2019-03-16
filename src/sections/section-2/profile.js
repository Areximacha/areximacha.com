/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import * as styles from './profile.style'

const Profile = () => (
  <styles.ProfileSection id='profile'>
    <styles.ProfileContent>
      <h2>Coder. Gamer. Geek.</h2>
      <p>
        <strong>Jay Tang</strong> - A self confessed nerd, obsessed with video
        games and possessor of an encyclopedic knowledge of comic book history.
      </p>
      <p>
        I am a web technologist, currently specialising in front-end engineering
        with React, Redux, NodeJS and a bunch of other stuff.
      </p>
      <p>
        I love building things and I am always excited to play with new tech,
        solving problems and leveling up my abilities to become more awesome.
      </p>
    </styles.ProfileContent>
  </styles.ProfileSection>
)

export default Profile
