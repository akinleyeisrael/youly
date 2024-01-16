import React from 'react'
import { getVideoAnalytics } from '@/lib/actions'
import { useAtom } from 'jotai';
import { ViewAnalyticsYoutube } from './ViewAnalytics';


const YoutubePage = async () => {

    return (
        <div>
            <ViewAnalyticsYoutube/>
        </div>
    )
}

export default YoutubePage