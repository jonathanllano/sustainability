import Slider from '@/components/sliderStories'
import sustainableSupplyChain from '../../../content/stories/kasaganahan/sustainable-supply-chain'

export default function SustainableSupplyChainLayout({ children }) {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        {children}

                        <Slider stories={sustainableSupplyChain} />
                    </section>
                </article>
            </div>
        </section>

    )
}   