import Slider from '@/components/sliderStories'
import humanRightsAndLaborPractices from '@/content/stories/kalinga/human-rights-and-labor-practices'

export default function HumanRightsAndLaborPractices({ children }) {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        {children}

                        <Slider stories={humanRightsAndLaborPractices} />
                    </section>
                </article>
            </div>
        </section>

    )
}   