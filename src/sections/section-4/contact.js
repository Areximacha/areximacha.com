import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import * as styles from './contact.style'

const Contact = () => (
  <styles.ContactSection id='contact'>
    <styles.ContactColumn>
      <h2>Contact Me</h2>
      <styles.ContactRow>
        <a
          href='https://www.linkedin.com/in/jay-tang-a6445b93'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            color='#333'
            css={styles.contactIcon}
          />
        </a>
        <a
          href='https://twitter.com/areximacha'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FontAwesomeIcon
            icon={faTwitter}
            color='#333'
            css={styles.contactIcon}
          />
        </a>
        <a
          href='https://github.com/Areximacha'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FontAwesomeIcon
            icon={faGithub}
            color='#333'
            css={styles.contactIcon}
          />
        </a>
        <a
          href='https://www.instagram.com/areximacha/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FontAwesomeIcon
            icon={faInstagram}
            color='#333'
            css={styles.contactIcon}
          />
        </a>
        <a
          href='mailto:i.jaytang@gmail.com'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            color='#333'
            css={styles.contactIcon}
          />
        </a>
      </styles.ContactRow>
    </styles.ContactColumn>
  </styles.ContactSection>
)

export default Contact
