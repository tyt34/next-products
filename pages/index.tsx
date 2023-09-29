import Link from 'next/link'
import { Button } from '@mui/material'

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <Link href="/products">
        <Button variant="text">Go</Button>
      </Link>
    </>
  )
}
