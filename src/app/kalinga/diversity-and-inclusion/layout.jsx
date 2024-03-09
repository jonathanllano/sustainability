import Slider from '@/components/sliderStories'
import diversityAndInclusion from '@/content/stories/kalinga/diversity-and-inclusion'
import employeeEngagementTrainingAndDevelopment from '@/content/stories/kalinga/employee-engagement-training-and-development'

export default function DiversityAndInclusionLayout({ children }) {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        {children}

                        <Slider stories={diversityAndInclusion} />
                    </section>
                </article>
            </div>
        </section>

    )
}   