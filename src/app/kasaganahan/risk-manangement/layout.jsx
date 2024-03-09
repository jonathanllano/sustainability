import Slider from '@/components/sliderStories'
import riskManagement from '../../../content/stories/kasaganahan/risk-management'

export default function RiskManagementLayout({ children }) {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        {children}

                        <Slider stories={riskManagement} />
                    </section>
                </article>
            </div>
        </section>

    )
}   