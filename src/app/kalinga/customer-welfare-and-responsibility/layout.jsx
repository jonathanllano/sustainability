import Slider from '@/components/sliderStories'
import customerWelfareAndDevelopment from '@/content/stories/kalinga/customer-welfare-and-development'
import diversityAndInclusion from '@/content/stories/kalinga/diversity-and-inclusion'
import employeeEngagementTrainingAndDevelopment from '@/content/stories/kalinga/employee-engagement-training-and-development'

export default function CustomerWelfareAndResponsibilityLayout({ children }) {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        {children}

                        <Slider stories={customerWelfareAndDevelopment} />
                    </section>
                </article>
            </div>
        </section>

    )
}   