import Image from 'next/image'
import React from 'react'
import { storiesCustomerWelfareResponsibility } from '@/api/api'
import Slider from '@/components/sliderStories'

export const metadata = {
  title: 'Customer Welfare and Responsibility',
  description: 'Customer Welfare and Responsibility | SMC Sustainability',
}

export default function Index() {
  return (
    <>
      <h1>Customer Welfare and Responsibility</h1>

      <p>Across the diverse business units of San Miguel,
        one of our priority responsibilities is to ensure
        the health and safety of our customers. This
        is a cornerstone upon which our brands have
        built their reputation and gained the trust of
        consumers. The key elements of our customer
        welfare and responsibility program vary
        according to the nature of each business.</p>

      <p>For SMFB, compliance with the regulations
        of the Food and Drug Administration (FDA) is
        primary. This includes obtaining a License to
        Operate for each production facility, Certificates
        of Product Registration, and compliance
        with mandatory labelling requirements
        such as product name, manufacturer’s
        name and address, nutrition information,
        list of ingredients, allergen declaration,
        serving size, net content, lot/batch number,
        and manufacturing and expiration dates. If
        applicable, storage and handling conditions, and
        directions for use are indicated. Additional label
        markings such as vitamin fortification, low calorie, low-alcohol or no preservatives are also
        validated and approved by FDA. Each business
        monitors new guidelines released periodically
        by the FDA and ensures that product
        development personnel are informed and
        trained in the required compliance measures
      </p>

      <p>
        Prior to releasing products to market, the
        company diligently conducts assessment of
        all ingredients used in product formulations,
        conducts sensory evaluation with respondents
        matching their target market, and establishes
        shelf life of each product. Standard parameters
        of all raw materials, finished goods and
        packaging are fully documented. Once in the
        market, samples from each production batch
        are retained in the manufacturing plant for
        reference in case of any product complaint that
        may arise.
      </p>

      <p>For Food in particular, efforts are ongoing to
        improve the nutritional value of our products.
        Recent declarations have linked obesity
        and non-communicable diseases such as
        hypertension and diabetes to processed food.
        To address this concern, the Food Group has
        been working on ways to improve the nutritional
        quality of its products, including fortification
        with vitamins and minerals, reformulation to
        reduce sodium and preservatives, and the
        launch of plant-based food. The reformulation
        process is painstaking and iterative as it aims
        to achieve target nutritional values while
        preserving the taste that consumers are
        accustomed to.</p>

      <p>The marketing of consumer goods is likewise
        subject to certain regulations, more so for
        alcoholic beverages. All the advertising
        materials released through media and on
        digital platforms comply with the requirements
        of Ad Standards Council, a self-regulating
        organization that aims to safeguard truth in
        advertising and give paramount consideration to
        the consumer’s interest. This includes a one second frame at the end of each commercial
        reminding the viewer to “Drink Responsibly.”
        The same caution is present in all outdoor
        advertising and merchandising materials.
        Thus, we do our part not to promote excessive
        drinking but capitalize on brand equity to
        promote our products. </p>

      <p>For our cement business, NCC follows
        Philippine National Standards (PNS) in
        labelling its products. This includes product
        classification, specification and application,
        trade name, trademark of the manufacturer,
        batch identification number, and information on
        disposal of packaging, which are in accordance
        with PNS 07:2018, PNS 63:2019, and PNS ASTM
        C91:2005.</p>

      <p>For infrastructure, a Road Safety Audit Report
        is produced based on two components, data
        collection and data evaluation. The audited
        project (e.g., Skyway, NAIAx, SLEX, TPLEX,
        STAR Tollway) must abide by several laws and
        regulations, including those relating to the
        environment, public health, safety, municipal
        and provincial requirements, and internal
        performance standards. Laws that address
        process safety management, right-to-know
        issues, or environmental management are
        examples of governmental controls.
      </p>

      <p>The organization and the Toll Regulatory Board
        (TRB) jointly inspect the tollways during an
        initial phase while driving a van equipped
        with a dashboard camera. TRB then reviews
        the video footage to assess the requirements
        for signages, their proper placement and
        categorization, the presence of hazardous items,
        and other safety-related issues. Through these
        parameters and procedures, the organization
        can then ensure safer and more convenient road
        use for motorists.
      </p>

      <p>The Company’s commitment to deliver quality
        products and services, and not cause any harm
        to people and the environment, is demonstrated
        by its ISO and Food Safety certifications, of
        which there were 134 installations with valid
        certificates as of the end of December 2022.</p>

      <div className='full-img'>
        <Image style={{ borderRadius: '0' }} src="/page/TollRegulatoryBoard.png" width={1144} height={603} alt='Toll Regulatory Board  ' />
      </div>

      <p>Gathering and addressing product complaints is
        another essential element in ensuring customer
        welfare. The Company has a Customer Care
        Hotline +632 8632-2000 which is staffed by
        SMITS subsidiary, ProSync. We have a San
        Miguel Corporation Facebook page, various
        Facebook brand pages, company websites and
        email addresses through which customers
        the video footage to assess the requirements
        for signages, their proper placement and
        categorization, the presence of hazardous items,
        and other safety-related issues. Through these
        parameters and procedures, the organization
        can then ensure safer and more convenient road
        use for motorists.
        The Company’s commitment to deliver quality
        products and services, and not cause any harm
        to people and the environment, is demonstrated
        by its ISO and Food Safety certifications, of
        which there were 134 installations with valid
        certificates as of the end of December 2022.
        and other individuals send in complaints,
        inquiries, and other feedback. ProSync sorts the
        information and sends these to the respective
        contact persons in charge of each business. We
        also employ social media monitoring tools to
        track any issues or posts mentioning San Miguel
        or our brands.</p>

      <div className='full-img'>
        <Image src="/page/qa_graph.png" quality={100} width={1135} height={446} alt='Graph ' />
      </div>
      <p>Customer complaints about food, in particular,
        are managed by Quality Assurance specialists
        following a standardized procedure, with
        the goal of resolving them within 24 hours.
        In addition to their technical knowledge
        about the products, the specialists are given
        soft skills training to listen, empathize, and
        properly interact with customers. An escalation
        protocol is defined should it be necessary to
        involve levels of management to settle issues.
        The organization appreciates that customer
        complaints and feedback are opportunities to
        identify areas for improvement and further
        strengthen food safety controls in place.</p>

      <div className='full-img'>

        <Image src="/page/food_lab.png" quality={100} width={950} height={500} alt='Food Lab ' />
        <Image src="/page/food_lab2.png" quality={100} width={950} height={500} alt='Food Lab ' />
      </div>



    </>
  )
}
