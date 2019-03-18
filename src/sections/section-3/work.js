import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import * as styles from './work.style'

export const PureWork = ({ data }) => {
  const [currentProject, setCurrentProject] = useState('arcadia')

  const renderButtons = nodes =>
    nodes.map(({ node: { frontmatter: { title } } }) => (
      <button
        className={`work-${title}${currentProject === title ? ` active` : ''}`}
        onClick={() => setCurrentProject(title)}
        key={`${title}`}
        type='button'
        data-testid={`test-${title}`}
      />
    ))

  const getDescription = nodes =>
    nodes.find(
      ({
        node: {
          frontmatter: { title },
        },
      }) => title === currentProject
    ).node.html

  return (
    <styles.WorkSection id='work'>
      <styles.WorkBackground className={`${currentProject}`} />
      <styles.WorkContent>
        <styles.WorkSelector>
          <h3>Selected Projects</h3>
          <styles.WorkButtons>
            {renderButtons(data.allMarkdownRemark.edges)}
          </styles.WorkButtons>
        </styles.WorkSelector>
        <styles.WorkDescription
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: getDescription(data.allMarkdownRemark.edges),
          }}
          data-testid='test-description'
        />
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
