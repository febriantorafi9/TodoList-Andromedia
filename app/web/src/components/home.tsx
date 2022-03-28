import { useLocal } from 'web-utils'

export default () => {
  const local = useLocal({
    count: 0,
  })

  return (
    <>
      <div>Page Home</div>
      <button
        onClick={() => {
          local.count++
          local.render()
        }}
      >
        klik {local.count}
      </button>
    </>
  )
}
