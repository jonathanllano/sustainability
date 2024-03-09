import Slider from '@/components/sliderStories'
import employeeEngagementTrainingAndDevelopment from '@/content/stories/kalinga/employee-engagement-training-and-development'

export default function EmployeeEngagementTrainingAndDevelopmentLayout({ children }) {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        {children}

                        <Slider stories={employeeEngagementTrainingAndDevelopment} />
                    </section>
                </article>
            </div>
        </section>

    )
}   