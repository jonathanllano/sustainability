import Slider from '@/components/sliderStories'
import biodiversitiesAndEcosystems from '@/content/stories/kalikasan/biodiversities-and-ecosystems'

export default function BiodiversityAndEcosystemsLayout({ children }) {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        {children}

                        <Slider stories={biodiversitiesAndEcosystems} />
                    </section>
                </article>
            </div>
        </section>

    )
}   