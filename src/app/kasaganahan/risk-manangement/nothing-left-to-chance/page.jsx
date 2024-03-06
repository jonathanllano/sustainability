import Image from 'next/image'
import React from 'react'
import { storiesRiskManagement } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
    title: 'Nothing Left to Chance',
    description: 'Nothing Left to Chance | SMC Sustainability',
}

export default function Index() {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        <h1 className='blue'>Nothing Left to Chance</h1>

                        <div className='full-img'>
                            <Image src="/page/petron.png" width={950} height={500} alt='Petron' />
                        </div>

                        <p>In a world where risk is the norm, Petron
                            stands out as a company that refuses to
                            leave anything to chance. That&rsquo;s why they
                            have implemented a robust enterprise
                            risk management system that focuses on
                            identifying and managing potential risks
                            even before they become actual issues. </p>

                        <p>Petron&rsquo;s approach to risk management is built on a
                            foundation of good governance and sustainability.
                            They recognize that managing risks not only
                            protects their business, but also helps to ensure
                            the safety of their employees, the communities in
                            which they operate, and the environment.</p>


                        <p>Petron&rsquo;s operations follow an integrated value
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