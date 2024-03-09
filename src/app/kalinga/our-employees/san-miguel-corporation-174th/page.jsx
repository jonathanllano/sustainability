import Image from 'next/image'
import React from 'react'
import { storiesHumanRightsLabor } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
    title: 'An Exemplary Filipino company',
    description: 'An Exemplary Filipino company | SMC Sustainability',
}

export default function Index() {
    return (
        <>

            <h1 className='orange'>San Miguel Corporation 174th out of Forbes’ 800 World’s Best Employers </h1>

            <Image src="/page/Forbes_800_World_Best_Employers.png" width={960} height={717} alt='An exemplary  Filipino company' />


            <p>In its 2022 list of the World’s Best Employers, American business magazine Forbes ranked San Miguel Corporation 174th out of 800 global companies that topped its extensive annual survey. SMC was one of only two Filipino firms to make it to the top 200. The survey was conducted in partnership with market research company, Statista.</p>

            <p>
                Statista surveyed 150,000 full-time and parttime employees across 57 countries working for multinationals and institutions to determine which of their employers excel in key areas, such as corporate impact and image, talent development, gender equality, and social responsibility. Survey respondents were asked to score their willingness to recommend their companies to family and friends based on these key criteria. SMC was among the 800 companies that received the highest scores from respondents.
            </p>

            <p>
                It is a major honor for us at San Miguel to be included in such a list, and to be ranked within the top 200 in the world, and one of the very best in the Philippines. We are also very proud to stand together with other Filipino companies that have emerged as among the best in the world in advancing the welfare of employees and workers, SMC President and CEO Ramon Ang said.
            </p>



        </>
    )
}
