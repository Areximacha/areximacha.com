import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { graphql, StaticQuery } from 'gatsby'

import * as styles from './work.style'
import dulux from '../../assets/images/work-dulux.jpg'
// import pandora from '../../assets/images/work-pandora.jpg'
// import sainsburys from '../../assets/images/work-sainsburys.jpg'
// import seat from '../../assets/images/work-seat.jpg'
// import chivas from '../../assets/images/work-venture.jpg'

const backgroundImage = css`
  background-image: url(${dulux});
`

const PureWork = ({ data }) => {
  const [currentProject, setCurrentProject] = useState('dulux')

  const renderButtons = nodes =>
    nodes.map(({ node: { frontmatter: { title } } }) => (
      <button
        className={`work-${title}${currentProject === title ? ` active` : ''}`}
        onClick={() => setCurrentProject(title)}
        key={`${title}`}
        type='button'
      />
    ))

  return (
    <styles.WorkSection id='work'>
      <styles.WorkBackground css={backgroundImage} />
      <styles.WorkContent>
        <styles.WorkSelector>
          <h3>Selected Projects</h3>
          <styles.WorkButtons>
            {renderButtons(data.allMarkdownRemark.edges)}
          </styles.WorkButtons>
        </styles.WorkSelector>
        <styles.WorkDescription>
          <h3>Work Title</h3>
          <p>
            A bunch of text about something or other that is about my work for
            whoever this may be of interest to.
          </p>
        </styles.WorkDescription>
      </styles.WorkContent>
    </styles.WorkSection>
  )
}

PureWork.propTypes = {
  data: PropTypes.object.isRequired,
}

const Work = () => (
  <StaticQuery query={query} render={data => <PureWork data={data} />} />
)

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "work" } } }
      sort: { fields: frontmatter___order }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Work
