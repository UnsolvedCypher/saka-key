import { h } from 'preact'
import StandardLayout from 'pages/layout/StandardLayout'
import StandardContentCard from 'pages/layout/StandardContentCard'

export default () => (
  <StandardLayout view='Extensions'>
    <StandardContentCard>
      <section className='mdc-card__primary'>
        <h1 className='mdc-card__title mdc-card__title--large'>Extensions</h1>
        <h2 className='mdc-card__subtitle'>Coming Eventually...</h2>
      </section>
    </StandardContentCard>
  </StandardLayout>
)
