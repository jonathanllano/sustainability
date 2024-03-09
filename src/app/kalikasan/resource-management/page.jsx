
import Image from 'next/image'
import React from 'react'
import Slider from '@/components/sliderStories'
import { storiesResourceManagement } from '@/api/api'

export const metadata = {
  title: 'Resource Management',
  description: 'Resource Management | SMC Sustainability',
}

export default function Index() {


  return (
    <>

      <h1>Resource Management</h1>

      <p>We recognize the realities of our finite planet.
        Each year, the world marks Earth Overshoot
        Day, a date when humanity’s demand for
        ecological resources in a given year exceeds
        what Earth can generate in that year. In 2022,
        this day landed on July 28, which means that
        the present generation liquidated resources
        meant for future generations during the
        remainder of 2022. Over the decades, the
        ecological footprint of humanity has worsened,
        leading to World Overshoot Day coming earlier
        and earlier each year, moving from December
        25 in 1970 to July 28 last year. The goal is to
        move the date forward. Not doing so will exact
        a heavy toll not only from an environmental
        and ecological point of view (climate change,
        biodiversity loss, drought) but also socially and
        economically (poverty, conflicts, wars).</p>

      <p>Thus, we in San Miguel join the rest of the world
        in the quest to postpone this date by ensuring
        the effective and efficient management of our
        resources. Energy and water are two of the
        most vital resources for San Miguel. They
        are indispensable in the successful conduct
        of our businesses, from power generation,
        food and beverage production, to packaging
        operations and infrastructure development,
        among others. Energy and water are key
        so we can continue to create value for all
        our stakeholders and to contribute to the
        growth of the Philippine economy. Across our
        operations, we have adopted energy efficiency
        and water conservation initiatives that we will
        continue to enhance, expand, and elevate in the
        coming years so that we can achieve the most
        sustainable use of our resources, for this and
        future generations of Filipinos.</p>

      <h3 className='green'>
        Energy
      </h3>
      <p>Energy is the fuel of the modern industrial
        economy. We use energy to fuel our capacity
        to deliver our services and products to
        the market—from operating our plants, for
        transportation and distribution, and for the
        lights in our offices and other company facilities. </p>

      <p>In 2022, the Company consumed 149.3 million GJ
        energy. A sizable portion of our energy consumption
        comes from the non-renewable fuel usage of Petron
        and SMGP for their operations.</p>

      <Image style={{ borderRadius: '0' }} src="/page/energy_operatoinal_spending.png" width={430} height={189} alt='Combined Bess Project' />

      <p>We are determined to reduce our energy
        consumption. By doing so, we would also reduce our
        operational costs and our environmental impact.
        As of 2022, approximately 38.26% of the Company’s
        operational spending is used on energy. Through
        various energy related programs, we were able to
        reduce our energy consumption by 103.3 thousand
        GJ of energy this year. We accomplished this by
        installing solar panels in various Petron gas stations
        and integrating the use of biomass in electrical
        generation in SMFB operations, among others. We are
        determined to continuously find new ways to be more
        efficient in our energy consumption and increase our
        use of renewable energy.</p>

      <Image style={{ borderRadius: '0' }} src="/page/energy_intensity_ratio.png" width={430} height={190} alt='Combined Bess Project' />

      <p>Our energy intensity for 2022 is 129.6 GJ for every
        million PhP of net sales. We aim to reduce our energy
        intensity while continuing to maintain robust growth
        and development in the Company. We plan to do this
        through employing more efficient energy technologies
        and alternatives such as recapturing excess heat from
        manufacturing and implementing renewable energy
        sources, such as solar power, biomass, and bioenergy,
        across all business units.</p>

      <p>We recognize the challenges associated with climate
        change and the impacts it could have on SMC’s energy
        consumption. By effectively managing our energy
        consumption, we improve production reliability,
        lower our energy costs, and contribute to sustainable
        business operations.</p>

      <h3 className='green'>Water</h3>

      <p>Water plays a vital role in our daily reality. Out
        of 115 million Filipinos, more than half lack
        access to sustainably sourced and safe water.</p>

      <p>Achieving water security remains a
        longstanding challenge for our country. We
        Filipinos are no strangers to water-related
        challenges such as water pollution, water
        scarcity, and insufficient access to sanitation.</p>

      <p>Recognizing this plight, we support the
        government’s thrust to achieve universal access
        to safe, sufficient, affordable, and sustainable
        water supply, hygiene, and sanitation by 2030.
        We will help create solutions and contribute
        to the government’s efforts in resolving
        water security challenges in the country.
        Thus, we have instituted water-saving and
        efficiency programs across our businesses and
        operations. </p>

      <Image style={{ borderRadius: '0' }} src="water_consumption.png" width={430} height={215} alt='Water Consumption' />

      <p>In 2022, 97% of our water withdrawal was
        seawater, which was used for cooling our
        equipment in our power plants and oil
        refinery. Approximately 98% of our total
        extracted water was discharged back safely to
        bodies of water at normal temperature after
        undergoing processing and treatment in our
        wastewater treatment facilities. The discharge
        of wastewater, whether to land or bodies of
        water, is highly regulated in the country and
        should satisfy the Water Quality Guidelines
        and General Effluent Standards of 2016 (DAO
        2016-08; and updated DAO 2021-19). We ensure
        our full compliance with these standards by
        establishing wastewater treatment facilities
        across our operations. We designed these
        treatment facilities to properly handle the specific
        pollutants they are intended to treat, which can be by
        a combination of physical, chemical, aerobic, and/or
        anaerobic treatment. We also have in place a tertiary
        treatment facility in cases where we can reuse treated
        wastewater. Wastewater with high chemical oxygen
        demand or COD levels is pretreated using Upflow
        Anaerobic Sludge Blanket technology to generate
        biogas that we use as fuel in our operations.
      </p>

      <p>The remaining 3% of our total water withdrawal in
        2022 was consumed by the Group as part of our
        beverage products, in our business processes—
        cleaning, rinsing, steam generation—and for office
        operations. Of our total wastewater, we were able to
        recycle 1.5 billion liters in 2022 alone, which we plan
        to boost in the coming years.</p>

      <Image style={{ borderRadius: '0' }} src="/page/ghg_emisson.png" width={440} height={197} alt='Water Recycled and Reused' />

      <p>Foremost in our water sustainability initiatives is a
        flagship program called “Water for All,” an initiative
        established in 2017 that aims to reduce our Groupwide use of scarce water by 50% by 2025 against a
        2016 baseline. </p>

      <p>An example of a notable feat under “Water for
        All” comes from our cement business. As of 2022,
        our cement business reduced its scarce water
        consumption by 88% compared to 2016 values.
        Furthermore, it aims to minimize if not do away
        altogether with its freshwater usage by implementing
        solutions such as rainwater harvesting and full
        recycling. In 2022 alone, it collected 446 million liters
        of rainwater, which it used for its manufacturing
        processes. </p>

    </>


  )
}
