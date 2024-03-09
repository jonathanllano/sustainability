import Image from 'next/image'
import React from 'react'

import { storiesBiodiversityEcosystems } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Biodiversity & Ecosystems',
  description: 'Biodiversity & Ecosystems | SMC Sustainability',
}


export default function Index() {
  return (
    <>
      <h1>Biodiversity and Ecosystems</h1>

      <p>Our country is one of the most biodiverse places
        in the world, with at least 20,000 wildlife species
        which cannot be found anywhere else. Thus,
        conserving our ecosystems and protecting
        their natural habitats from significant threats
        should be of utmost importance, not only for the
        government, but also for the private sector.
      </p>

      <p>In the recently held 27th UN Conference of the
        Parties (COP27) in Egypt, nature-based solutions
        were included in UN Climate negotiations for the
        first time. COP27 “emphasizes the importance
        of protecting, conserving and restoring nature
        and ecosystems to achieve the Paris Agreement
        temperature goal, including through forests and
        other terrestrial and marine ecosystems acting
        as sinks and reservoirs of greenhouse gases
        and by protecting biodiversity, while ensuring
        social and environmental safeguards.”
      </p>

      <p>We strongly support and welcome this positive
        development. We commit to the responsible
        conduct of our businesses to ensure that we
        maintain the balance of nature and that we give
        priority to the preservation and restoration of
        our natural ecosystems. We have stepped up
        our sustainability initiatives through multiple
        environmental protection and biodiversity
        conservation efforts.
      </p>

      <Image style={{ borderRadius: '0' }} src="ecosystem_biodiversity.png" width={442} height={435} alt='ECOSYSTEM AND BIODIVERSITY' />

      <p>In 2022, we had six operational sites in the Group
        that were based in or adjacent to protected areas or
        areas of high biodiversity value. These were Petron’s
        Bawing and Amlan terminals, GSMI’s DBI, SMGP’s
        Masinloc and Ilijan power plants, and SMHC’s LCWD.
      </p>

      <p>Petron’s Bawing Terminal is located along the
        Sarangani Bay Protected Seascape, which is a
        proclaimed National Integrated Protected Area
        System (NIPAS) and also classified as a Category
        V Protected Area by the International Union for
        Conservation of Nature (IUCN). To protect the site, we
        developed and implemented a 10-year biodiversity
        conservation plan that covers 91,737 m2 of foreshore
        area along the seascape. The plan focuses on
        preventing and managing any environmental (e.g.,
        water pollution and habitat destruction) and socioeconomic (e.g., alternative livelihood) issues that
        may arise. We review and update this plan every 10
        years or less, depending on the need, to account for
        developments in the area and changes in regulations.</p>

      <p>Meanwhile, Petron’s Amlan Terminal is adjacent to
        the Tañon Strait Protected Seascape, which is the
        largest Marine Protected Area in the Philippines. To
        help protect the site as well as the other coastlines
        and coastal areas where Petron’s operations are
        located, Petron has created “Puno ng Buhay,” a forest
        restoration and mangrove conservation program in
        partnership with the DENR and our host LGUs. Under
        this initiative, we adopt mangrove reforestation sites
        with the goal of protecting critical watersheds and
        minimizing our carbon footprint. We also train the
        residents of our neighboring coastal areas on how
        to grow and take care of mangrove forests, with the
        hope of providing them with an additional source of
        livelihood. As of 2019, we have adopted a total of 30
        hectares of mangrove reforestation areas in Tacloban
        City, Leyte and Roxas City, Capiz, which resulted in
        more than 1,000 tons of sequestered carbon.</p>

      <p>GSMI’s DBI facility is located along the coastline
        of the Guimaras Strait, which is identified as a
        Biodiversity Conservation Site in Western Visayas
        by the DENR. In the mid-1990s, we established a
        mangrove reforestation area along the coastline
        where the distillery is located. Now measuring close
        to 12 hectares, the mangrove forest has an excellent
        survival rate of 96%, proving the area has remained
        healthy. These mangroves were also planted
        to contribute to the conservation of the natural
        biodiversity of the Guimaras Strait and to
        reduce the risk of flooding and soil erosion. We
        also conduct tree planting activities in the area
        every year.</p>

      <h3 className='green'>We will safeguard the
        well-being of the natural
        habitats and ecosystems
        where we operate. We will
        continue to work with
        others toward a world
        where biodiversity is
        valued and conserved.</h3>

      <p>Furthermore, we constantly monitor Guimaras
        Strait’s coastline to ensure that the surrounding
        area is always kept clean. One of GSMI’s
        longest-running biodiversity conservation
        activities is regular coastal cleanups in
        collaboration with LGUs and volunteers from
        nearby communities.</p>

      <p>SMGP’s Masinloc Power Plant is situated along
        Oyon Bay, a protected landscape and seascape
        by virtue of the Expanded NIPAS Act; while
        the Ilijan Power Plant is located by the Verde
        Island Passage, which is recognized as the
        center of global shore-fish biodiversity. SMGP
        has developed a biodiversity management
        system that safeguards the ecosystems around
        these protected areas. We have long-standing
        partnerships with environmental experts,
        government agencies, and local communities
        that implement tree planting, mangrove
        reforestation, and coral rehabilitation projects.
        One of our biggest initiatives is Project 747,
        which aims to plant over 7 million upland and
        mangrove trees over 4,000 hectares of land in at
        least seven provinces nationwide. </p>

      <p>Lastly, SMHC’s LCWD is near the Angat
        Watershed Forest Reserve, which protects the
        drainage basin in the southern Sierra Madre
        range north of Metro Manila. SMHC completed
        the planting of over 26,000 trees in Angat,
        Bulacan together with the town’s
        Dumagat communities. In partnership with the
        Dumagats, SMHC was able to cover the first
        16 of 55 hectares targeted for planting with
        dipterocarp tree species like white and red
        lauan, palosapis, apitong, yakal, guijo, and other
        indigenous species such as bignai and narra.
        This initiative is part of SMGP’s Project 747.
        Furthermore, we also partnered with
        Metropolitan Waterworks and Sewerage System
        (MWSS) to launch an annual Million Tree
        Planting Challenge to replenish the forest cover
        of 126 hectares of the Angat Dam Watershed
        within three years. Under this challenge, our
        employees have planted 6,400 trees (including
        3,200 Narra and Guyabano tree varieties)
        over 14 hectares at the Angat Dam Watershed
        since 2019.</p>

      <p>In the coming years, we will implement more
        large-scale changes with both the private sector
        and the government to help halt biodiversity
        loss. We will safeguard the well-being of the
        natural habitats and ecosystems where we
        operate. We will continue to work with others
        toward a world where biodiversity is valued and
        conserved.
      </p>


    </>
  )
}
