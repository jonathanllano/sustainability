import Slider from '@/components/sliderStories'
import ourEmployees from '@/content/stories/kalinga/our-employees'

export default function OurEmployeesLayout({ children }) {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        {children}

                        <Slider stories={ourEmployees} />
                    </section>
                </article>
            </div>
        </section>

    )
}   