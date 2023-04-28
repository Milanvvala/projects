import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Create, Dashboard, Layout, Profile } from './components' // layouts and pages
import { createAction, taskLoder } from './components/utils'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} loader={taskLoder} />
      <Route path="create" element={<Create />} action={createAction} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)

export default function App() {

  return (
    <RouterProvider router={router} />
  )

}
