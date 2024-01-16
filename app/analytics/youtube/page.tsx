import React from 'react'
import { getVideoAnalytics } from '@/lib/actions'
import { useAtom } from 'jotai';
import { ViewAnalytics } from './VewAnalytics';


const YoutubePage = async () => {

    return (
        <div>
            <ViewAnalytics/>
        </div>
    )
}

export default YoutubePage