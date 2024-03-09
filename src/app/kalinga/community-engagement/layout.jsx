import Slider from '@/components/sliderStories'
import communityEngagement from '@/content/stories/kalinga/community-engagement'


export default function CommunityEngagementLayout({ children }) {
    return (
        <section className='article-container'>
            <div className='block-content'>
                <article className='article'>
                    <section className='description-container'>
                        {children}

                        <Slider stories={communityEngagement} />
                    </section>
                </article>
            </div>
        </section>

    )
}   