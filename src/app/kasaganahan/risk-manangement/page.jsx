import Image from 'next/image'
import React from 'react'
// import { storiesRiskManagement } from '@/api/api'
// import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Risk Management',
  description: 'Risk Management | SMC Sustainability',
}

export default function Index() {
  return (
    <section className='article-container'>
      <div className='block-content'>
        <article className='article'>
          <section className='description-container'>
            <h1>Risk Management</h1>

            <p>Risk management in the current context no
              longer serves its sole purpose of avoiding risks;
              rather, it evolved to become a structure in
              decision making that maximizes opportunities to
              achieve business objectives while maintaining
              risks at acceptable levels for the company. We
              have been practicing risk management since
              the late 1990s but are on our way to formally
              adopting an Enterprise Risk Management (ERM)
              framework within 2023.</p>

            <p>We have institutionalized the ERM process in
              SMC parent company with the assistance of
              SGV & Co. We collaborated with representatives
              from our different departments to ensure
              a holistic and cross-functional view of the
              exposures faced by the Group. We identified and
              prioritized critical business risks and developed
              risk strategies to manage or mitigate the
              occurrence and impact of the risks. We crafted
              comprehensive action plans to implement these
              strategies.</p>

            <p>Our Risk Management Executive Team, headed
              by our Chief Risk Officer, defines our risk
              priorities, aligns risk policies and strategies
              with our overall company plan, monitors the
              effectiveness of our strategies, and reports the
              status of implementation of our action plans
              pertaining to risks.</p>

            <p>As risks and opportunities emerge over time,
              we will make evaluations periodically to keep
              abreast of the exposures of the company and
              assure stakeholders that our management
              is fully updated on the potential threats
              surrounding the continuous operation of SMC.</p>


            <p>A key exposure that presents significant risk
              to the continuity of our operations is climate
              change. Climate-related catastrophes—such as
              typhoons, droughts, and floods—may disrupt
              our operations and the delivery of our products
              and services. As such, we continue to develop
              initiatives to both mitigate and adapt to ongoing
              and possible impacts of climate change. </p>


            <h3 className='blue'>
              In today&rsquo;s rapidly evolving
              business landscape, we are
              committed to maintaining
              a robust risk management
              framework that enables us
              to seize opportunities and
              achieve our objectives.
            </h3>

            <p>Currently we are looking into how the guidelines of
              the TCFD can be incorporated into our current ERM
              structure.</p>

            <p>Another potential risk is in the area of procuring
              goods and services. At San Miguel, we recognize
              the immense importance of procurement in
              our operations and the impact it can have
              on our business. Thus, we have established
              the Procurement Governance Group (PGG),
              which exercises guidance and oversight over
              procurement activities across San Miguel. The
              PGG is responsible for (1) reviewing existing
              procurement policies, guidelines, and procedures,
              and establishing necessary and appropriate
              process improvements in collaboration with all
              functions concerned; (2) conducting compliance and
              operational audits on procurement transactions;
              and (3) identifying training programs for existing
              personnel to enhance their skills in all aspects of
              the purchasing process. In addition, as part of our
              pre-emptive measures, procurement personnel
              are periodically rotated among different business
              units. This will not only serve as a preventive
              measure, but also provide our staff with valuable
              developmental opportunities. </p>

            <p>In today&rsquo;s rapidly evolving business landscape,
              we are committed to maintaining a robust risk
              management framework that enables us to seize
              opportunities and achieve our objectives. By
              keeping a keen eye on emerging risks, such as
              climate change, and taking pre-emptive measures
              to address them, we are ensuring the continuity of
              our operations and strengthening the trust of our
              stakeholders in our brand.</p>

            <h3 className='blue'>Nothing left
              to chance</h3>

            <div className='full-img'>
              <Image src="/page/petron.png" width={950} height={500} alt='Petron' />
            </div>
            <p>In a world where risk is the norm, Petron
              stands out as a company that refuses to
              leave anything to chance. That’s why they
              have implemented a robust enterprise
              risk management system that focuses on
              identifying and managing potential risks
              even before they become actual issues. </p>

            <p>Petron’s approach to risk management is built on a
              foundation of good governance and sustainability.
              They recognize that managing risks not only
              protects their business, but also helps to ensure
              the safety of their employees, the communities in
              which they operate, and the environment.</p>


            <p>Petron’s operations follow an integrated value
              chain, which means risks can arise from every
              process and even cut across different divisions.
              The major risks managed by Petron are foreign
              exchange risk, potential operational disruptions,
              profit margin and cash flow risk, and regulatory
              risk. These risks could have a significant negative
              impact on the company if left unchecked.
            </p>

            <p>Following a bottom-up approach, each of its
              divisions is required to conduct regular risk
              assessments to identify and map potential risks,
              with action plans formulated to manage them
              effectively. This proactive approach ensures that
              risks are identified and mitigated, no matter how
              small or large they may be. To ensure that all risks
              are addressed, the results of these assessments
              are funneled up to the Management Committee
              and subsequently the Board of Directors through
              the annual Business Planning process.</p>

            <p>But Petron does not stop there. They have
              designated specific corporate units with special
              duties to ensure effective oversight and technical
              assistance. For example, the International
              Trade Finance Section, under the Treasurers
              Department, oversees foreign exchange hedging
              transactions. The Transaction Management Unit,
              operating under the Controllers Department,
              provides backroom support for all financial
              transactions. The Corporate Technical Services
              Group is responsible for ensuring compliance with
              domestic and international standards for health,
              safety, and environment. Lastly, the Internal
              Audit Department is tasked with implementing
              a risk-based auditing approach to ensure the
              effective implementation of its risk management
              framework. </p>

            <p>By adopting a comprehensive approach to
              risk management, Petron ensures that they
              are not only prepared for the unexpected but
              also able to operate sustainably in the long
              run. With a commitment to good governance
              and sustainability, they are able to build trust
              with their stakeholders, create value for their
              shareholders, and contribute to the well-being of
              the communities in which they operate.</p>

            {/* <Slider storiesItem={storiesRiskManagement} /> */}
          </section>
        </article>
      </div>
    </section>
  )
}
