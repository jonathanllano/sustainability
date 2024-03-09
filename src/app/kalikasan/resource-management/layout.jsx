import Slider from '@/components/sliderStories'
import resourceManagement from '@/content/stories/kalikasan/resource-management'

export default function ResourceManagementLayout({ children }) {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        {children}

                        <Slider stories={resourceManagement} />
                    </section>
                </article>
            </div>
        </section>

    )
}   