import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Dashboard } from './components/DashBoard'
 
 const queryClient = new QueryClient()
 
 export default function App() {
   return (
     <QueryClientProvider client={queryClient}>
       <Dashboard />
     </QueryClientProvider>
   )
 }