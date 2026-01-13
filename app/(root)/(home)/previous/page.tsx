import CallList from '@/components/CallList'

const Previous = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Previous</h1>

      <CallList type='ended' />
    </div>
  )
}

export default Previous