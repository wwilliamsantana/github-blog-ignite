import { Route, Routes } from 'react-router-dom'
import { DefaultTheme } from './layouts/DefaultTheme'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultTheme />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/issues/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
