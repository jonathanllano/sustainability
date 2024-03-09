import Slider from '@/components/sliderStories'
import circularEconomy from '@/content/stories/kalikasan/circular-economy'

export default function CircularEconomyLayout({ children }) {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        {children}

                        <Slider stories={circularEconomy} />
                    </section>
                </article>
            </div>
        </section>

    )
}   