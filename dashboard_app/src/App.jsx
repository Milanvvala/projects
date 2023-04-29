import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { createAction } from './components/utils'
// import { taskLoder } from './components/utils'
import { Create, Dashboard, Layout, Profile } from './components' // layouts and pages

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* <Route index element={<Dashboard />} loader={taskLoder} /> */}
      <Route index element={<Dashboard />} />
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
