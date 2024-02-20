/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

let done = false

const loadPost = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setPost: React.Dispatch<React.SetStateAction<any[]>>
) => {
  if (done) return
  done = true

  console.info('#### fetch ####')
  // Till the data is fetch using API
  // the Loading page will show.
  setLoading(true)

  // Await make wait until that
  // promise settles and return its result
  const response = await fetch('https://restcountries.com/v3.1/name/china')

  // After fetching data stored it in posts state.
  setPost(await response.json())

  // Closed the loading page
  setLoading(false)
}

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  console.info(posts.length)
  console.count('re-renders')

  useEffect(() => {
    loadPost(setLoading, setPosts)
  }, [])
  return (
    <div>
      <p>Hello World</p>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        posts.map((item) => (
          <Button
            variant="destructive"
            key={item.fifa}
          >
            CLICK HERE
          </Button>
        ))
      )}
    </div>
  )
}
