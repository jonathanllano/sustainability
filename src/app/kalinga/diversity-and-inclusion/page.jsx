import Image from 'next/image'
import React from 'react'
import { storiesDiversityInclusion } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Diversity And Inclusion',
  description: 'Diversity And Inclusion | SMC Sustainability',
}

export default function Index() {
  return (
    <>

      <h1>Diversity And Inclusion</h1>

      <p>In SMC’s Human Resources Manual, Section
        9 on Recruitment and Hiring, it is stated, “All
        applicants are considered regardless of gender,
        civil status, religion, or physical ability, provided
        that the minimum education requirement and
        competencies required by the position are
        fulfilled.”</p>

      <p>We are indeed an equal opportunity employer
        that hires based on the personal skills,
        knowledge, and capabilities of each candidate.
        The following standards of conduct, as codified
        in our Recruitment Policy, Company Rules and
        Regulations, and Employee Handbook, guide our
        hiring process:
      </p>

      <ul>
        <li>
          <p>
            Respect for people: Recognize each other
            as individuals and commit to nurturing each
            other’s individual capabilities.
          </p>
        </li>
        <li>
          <p>
            Integrity: Conduct business in a manner, which
            is ethical, fair, and right, and in all reasonable
            circumstances, above reproach.
          </p>
        </li>

        <li>
          <p>
            Manpower selection and placement policy:
            Base selection process on merits and
            aptitudes
          </p>
        </li>

        <li>
          <p>Diversity and gender equality: </p>
          <ul>
            <li>
              <p>Adhere to Republic Act No. 6725, which
                protects against the discrimination of
                women with respect to the terms and
                conditions of their employment. </p>
            </li>
            <li>
              <p>Observe the Anti-Discrimination Act of
                2017, which protects employees from
                discrimination in all operations.</p>
            </li>
            <li>
              <p>Do not consider age, gender, religion,
                ethnic affiliations as bases for prospective
                employment.</p>
            </li>
          </ul>
        </li>

        <li>
          <p>Do not condone the use of child labor, nor
            practice forced or compulsory labor.
          </p>
        </li>
      </ul>

      <p>At SMC, we value gender diversity in the
        workplace. We believe that promoting gender
        inclusivity not only benefits our employees
        but also contributes to the success of our
        business. We know that a diverse workforce
        brings unique perspectives, experiences, and
        ideas to the table, leading to greater innovation,
        creativity, and problem-solving. That is why
        we have implemented policies and practices
        that uphold gender equality, such as offering
        equal opportunities for career development
        and advancement, providing equal pay for
        equal work, and fostering a safe and supportive
        environment that is free from discrimination
        or harassment. Consistent with this, we fully
        comply with the Safe Spaces Act (Republic Act
        No. 11313), which aims to protect individuals
        against sexual harassment. We stand firm in
        our commitment to promoting a workplace free
        from all forms of gender-based misconduct and
        where everyone feels respected, valued, and
        protected.
      </p>

      <h3 className='orange'>We know that a diverse
        workforce brings unique
        perspectives, experiences,
        and ideas to the table,
        leading to greater
        innovation, creativity, and
        problem-solving</h3>

      <p>In 2022, there were no reported incidents of
        discrimination within the Group.</p>

      <p>We recruit and reward employees based on
        merit. We give opportunities to individuals,
        especially those belonging to our fence-line
        communities, regardless of their social status.
        While the Company has no formal hiring policy
        for ethnic minority groups, we actively support
        the programs of our subsidiaries for their
        respective communities.</p>

      <p>For instance, Petron’s Bataan Refinery gives
        members of Aeta communities the opportunity
        to be employed at this facility through an
        apprenticeship program. A number of members
        of these communities have successfully finished
        the training program and have been gainfully
        employed. This has inspired other members
        of the indigenous group to apply for similar
        apprenticeships.</p>

      <p>The distribution of work location throughout the
        different regions of the Philippines generally
        reflects the Company’s size of business in
        these areas. We recognize the value of onsite
        presence in each region in terms of better
        understanding and quicker response to market
        developments, easier access to local suppliers
        and direct contribution to local employment. At
        all facilities and offices nationwide, we prioritize
        local hiring.</p>

      <Image style={{ borderRadius: '0' }} src="/page/number_of_employees_by_work_location.png" width={765} height={847} alt='NUMBER OF EMPLOYEES BY WORK LOCATION
' />
    </>

  )
}
