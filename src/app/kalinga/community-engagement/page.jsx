import Image from 'next/image'
import React from 'react'
import { storiesCommunityEngagement } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Community Engagement',
  description: 'Community Engagement | SMC Sustainability',
}

export default function Index() {
  return (
    <>

      <h1>Community Engagement</h1>

      <p>At San Miguel, we do not see strategy and CSR
        as separate. Our overarching value, malasakit,
        is actionable and sustainable. At the heart of the
        relationship between our businesses and society
        is not just the charitable and philanthropic
        deeds that we do, but business activities that
        are aligned with social issues. From the roads
        and power plants we build to the food and
        drink we put on people’s tables, our projects
        support the basic needs of the Philippines as a
        developing economy.</p>

      <p>The Company’s social development arm, San
        Miguel Foundation, was established in 1972, and
        in the 50 years since, the Foundation has run
        a wide range of projects and activities in areas
        such as environmental stewardship, community
        and livelihood development, housing, education,
        nutrition, health, and disaster relief. </p>

      <p>San Miguel has always been a vital first
        responder in times of crisis and natural
        disasters. Over one billion pesos went toward
        housing the homeless following Typhoon
        Sendong in 2012 and Typhoon Yolanda in 2013.
        Since then, San Miguel has demonstrated the
        same quick response in the face of calamity,
        donating millions of pesos in relief goods and
        mobilizing to help communities get back on their
        feet. The most recent example of its CSR efforts
        was in full evidence during the pandemic.
        Between 2020 to 2022, San Miguel donated
        close to <span style={{ whiteSpace: 'nowrap', fontFamily: 'Merriweather, serif', color: '#505052' }}>530 million PHP</span> in food donations, and
        almost a billion pesos in medical donations
        alone.</p>

      <p>As a company that prides itself in being a
        contributor to national development on the
        macro level, San Miguel is present at the micro
        level through the Foundation. Like its parent,
        San Miguel Foundation has taken a problemsolving approach to address important social
        issues. Its key aims are closely aligned with the
        company’s social development agenda: lifting
        Filipinos out of poverty and strengthening
        community and national resilience.
      </p>

      <p>Having deliberately moved away from the
        traditional philanthropic model of the last few
        decades, the foundation has tried to take a
        context-focused approach to corporate giving
        that has a greater chance of producing social
        benefits far exceeding those provided by
        individual donors or traditional foundations. In
        solving social problems, specifically in helping
        communities tackle barriers to participation
        and progress, the Foundation collaborates
        closely with government agencies, international
        and regional organizations, and other nongovernmental actors.</p>

      <p>A big part of our sustainability thinking is trying
        to understand society’s big problems, and how
        our businesses can play a part in solving them. </p>

      <p>Our incubators for social change, San Miguel’s
        Better World sustainable communities make
        use of idle, abandoned, and vacant properties
        and repurpose them for community and civic
        uses such as green space, learning centers, and
        health care facilities. Most important, through
        committed, long-term community engagement,
        we are able to encourage greater civic capacity,
        and give the economically disadvantaged a
        voice in their community’s future.
      </p>

      <p>Better World Tondo, San Miguel’s first
        community center, focuses on food waste,
        hunger, and improving learning outcomes.
        Member families are provided free meals and
        weekly groceries and after-school learning
        tutorials.</p>

      <p>When public schools closed during the
        pandemic, our afterschool program run by the
        Foundation’s partner AHA Learning Center
        innovated to keep kids safe and engaged,
        expanding their hours and services to help
        children cope with the challenges of distance
        learning. AHA also provides its expertise in
        social-emotional learning and trauma-informed
        care to help our students (and their parents)
        recover emotionally.</p>

      <h3 className='orange'>Local Community Engagements</h3>

      <div className='full-img'>
        <Image style={{ borderRadius: 0 }} src="/page/local_community_engagements.png" width={830} height={1217} alt='Local community engagements' />
      </div>

      <p>The impact of COVID-19 had acute effects
        on women, including a rise in gender-based
        violence amid lockdowns, women’s loss of
        economic security, and increased demands in
        the home that fall largely on women.</p>

      <p>Designed to be a safe space for women and
        mothers in nearby communities—a place where
        they can share their stories and silent struggles
        and find the support they need—Better World
        Cubao H.E.R. (Health, Empowerment, Recovery)
        Center is the Foundation’s newest Better World
        initiative. San Miguel Foundation and AHA
        have developed a comprehensive approach
        to women’s overall health and well-being,
        empowering women to advocate for themselves
        and one another.
      </p>

      <p>As we see it, each of San Miguel’s Better
        World initiatives helped build communities
        where values and citizenship, and participation
        matter—where people can hope for a better life
        and be self-propelled to seek it. </p>

      <p>One of the keys to ending hunger and poverty
        in both rural and urban areas is to enhance
        linkages. Launched in February 2021 as a
        response to the disruption in supply chains,
        Better World Diliman serves as a ready
        marketplace for fruits and vegetables rescued
        by our partner Rural Rising.</p>

      <p>As of June 2022, we have rescued 950,000 kg
        of produce and helped some 4,500 farmers
        throughout the Philippines. Apart from food
        rescue, Better World Diliman provides training
        and access to farming inputs and other
        resources to promote resiliency in the face of
        disruption and market shocks.</p>

      <p>Another of San Miguel’s flagship community
        programs is the School for Experiential and
        Entrepreneurial Development (SEED) Sumilao
        through which we strive to promote the
        welfare of agricultural communities while
        helping ensure food security. Through a
        partnership with SEED Philippines, we hope to
        raise the next generation of farmers and agri entrepreneurs. Farmers and farm workers are
        undervalued in our society, driving away many
        of those who might otherwise be attracted to
        agriculture. SEED Sumilao adopts a holistic
        approach to teaching through classroom
        instruction, hands-on learning, and enterprise
        development. Students take on a raft of courses
        that center around character development,
        enterprise management, communications, and
        farming technology. During the pandemic, the
        school’s focus shifted given the urgent need
        to strengthen local food production and create
        more resilient and reliable food systems. </p>

      <p>Health is another major focus area for San
        Miguel. Through a network of community
        clinics, San Miguel continues to provide its host
        communities with better access to healthcare
        services. Every year, over 1,200 individuals
        benefit from healthcare services offered for
        free at San Miguel Brewery community clinics
        in Valenzuela, Pampanga, Davao, and Cebu,
        San Miguel Mills’ community clinic in Batangas,
        and the Petron Community Health Center in
        Pandacan and Bataan. </p>

      <p>These clinics, though small in scale, provide
        specialist care, particularly for patients with
        diabetes, tuberculosis, and other cardiovascular
        diseases. San Miguel, through the San Miguel
        Foundation, also runs regular medical missions
        and outreach programs in far-flung communities
        where basic healthcare services are wanting. </p>

      <p>Another long-running, high-impact initiative of
        the Foundation is its First 1,000 Days project
        for mothers and babies, a health and nutrition
        intervention program starting from the mother’s
        conception up to the child’s second birthday. The
        program, spearheaded by San Miguel’s Food
        group, aims to address the wasting and stunting
        of Filipino children by focusing on an infant’s
        growth trajectory, providing nutritious food,
        promoting healthy routines and behaviors, and
        reducing health disparities among vulnerable
        children and families.</p>

    </>
  )
}
