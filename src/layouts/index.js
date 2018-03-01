import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gig City Elixir"
      meta={[
        { name: 'description', content: "One of 2018's premiere functional programming conferences" },
        { name: 'keywords', content: 'Elixir, Functional Programming, Functional Programming Conference' },
      ]}
    />
    <Header />
    <div className="limit-width">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
