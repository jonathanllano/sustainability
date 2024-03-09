import Image from 'next/image'
import React from 'react'
import { storiesEmployeeHealthSafety } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Healthy Minds At Work',
  description: 'Healthy Minds At Work | SMC Sustainability',
}

export default function Index() {
  return (
    <>

      <h1 className='orange'>Healthy Minds At Work </h1>

      <div className='full-img'>
        <Image src="/page/aruga.png" quality={100} width={950} height={500} alt='Aruga | Healthy minds at work' />
      </div>

      <p>The employee wellness program is guided by the
        following framework:</p>

      <p><b>MIND:</b> To provide programs and activities
        that support mental health and well-being by
        harnessing mindfulness, focus, and resilience.
      </p>

      <p><b>BODY:</b> To promote physical fitness through
        programs on nutrition, exercise, rest, and
        relaxation. (Examples are Taichi and Dance Fitness
        Fridays).</p>

      <p><b>HEART:</b> To give employees emotional support
        through programs that encourage self-care,
        strengthen self-esteem, and nurture a positive
        mindset.</p>

      <p><b>SPIRIT:</b> To help our employees discover and define
        what is at the heart of what they value—connecting
        this to a personal purpose and to SMC’s value of
        malasakit.</p>

      <p>With this, SMC aims to keep employees engaged
        and active, enhancing their personal value, not
        only to the company, but even more to their
        respective families and communities.</p>


    </>
  )
}
