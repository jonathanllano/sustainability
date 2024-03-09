import Slider from '@/components/sliderStories'
import employeeHealthAndSafety from '@/content/stories/kalinga/employee-health-and-safety'

export default function EmployeeHealthAndSafetyLayout({ children }) {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        {children}

                        <Slider stories={employeeHealthAndSafety} />
                    </section>
                </article>
            </div>
        </section>

    )
}   