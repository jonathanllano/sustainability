
import Image from 'next/image'
import React from 'react'
import Slider from '@/components/sliderStories'
import { storiesResourceManagement } from '@/api/api'

export const metadata = {
  title: 'From Flames To Fuel',
  description: 'From Flames To Fuel | SMC Sustainability',
}

export default function Index() {

  return (
    <>

      <h1>From Flames To Fuel</h1>

      <div className='full-img'>
        <Image src="/page/flares_to_fuel.png" width={950} height={500} alt='Combined Bess Project' />
      </div>

      <p>As the only refining facility in the
        Philippines, the Petron Bataan Refinery
        (PBR) is critical to ensuring fuel supply
        security for the country. Today, it is
        one of the most advanced facilities in
        Asia-Pacific, having benefited from a
        major upgrade completed in 2014.</p>

      <p>As part of the Refinery’s operation, the plant may
        produce flare gas (waste gas) particularly during
        plant shutdown and startup activities and day-to-day
        operations. These waste gases are sent to the flare
        facility to ensure safe release to the environment,
        following strict environmental standards stipulated in
        RA 8749 or the Philippine Clean Air Act of 1999 and its
        Implementing Rules and Regulations.</p>

      <p>In 2014, the refinery installed a Flare Gas Recovery
        Facility to recover the flare gas composed mainly of
        hydrogen, methane, ethane, butane, propane, and
        other derivatives, and to upgrade these to fuel that
        is used for the Refinery’s operation. Consequently,
        this reduced the requirement for supplemental fuel
        from other sources and avoided the carbon emissions
        from the supplemental fuel. The facility significantly
        reduced the plant’s flaring rate from 4.1% (as % of
        total GHG contributed by flaring) in 2012 to less than
        0.7% since the completion of the project up to present.
        In 2022, actual waste gases recovered amounted to
        32,330 barrels , which is equivalent to a reduction in the
        refinery’s energy consumption of around 206,597 GJ in
        the same year. The waste gas recovered in 2022 alone
        avoided 10,123 MT of GHG emissions from flaring.</p>

    </>
  )
}
