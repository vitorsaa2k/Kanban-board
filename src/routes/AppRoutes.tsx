import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { Board } from '../pages/Board'
const client = new QueryClient()


export function AppRoutes() {
  return (
    <QueryClientProvider client={client}>
    <Router>
      <Routes>
        <Route path='/' element={<Board />} />
      </Routes>
    </Router>
    </QueryClientProvider>
  )
}