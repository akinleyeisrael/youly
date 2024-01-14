"use client"
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

// Create a client
const queryClient = new QueryClient()

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}