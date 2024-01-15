export const dynamic = 'force-dynamic'
import React from 'react'
import { DashboardForm } from './form'
import { getVideoAnalytics } from '@/lib/actions'
import { useAtom } from 'jotai';
import { analyticsAtom } from '@/lib/atoms';
import { ViewAnalytics } from './VewAnalytics';


const Dashboard = async () => {

    return (
        <div>
            <ViewAnalytics/>
        </div>
    )
}

export default Dashboard