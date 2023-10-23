
import HappeningPage from '@/components/HappeningPage'
import HomePage from '@/components/HomePage'
import Trending from '@/components/Trending'

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between py-24">
      <HomePage />
      <div className='-z-10'>
        <Trending />
      </div>
      <br />
      <div className='-z-10 p-0 m-0'>
        <HappeningPage />
      </div>

    </main>
  )
}
