import climateChangeAction from '@/content/stories/kalikasan/climate-change-action'
import Slider from '@/components/sliderStories'

export default function ClimateChangeActionLayout({ children }) {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        {children}

                        <Slider stories={climateChangeAction} />
                    </section>
                </article>
            </div>
        </section>

    )
}   