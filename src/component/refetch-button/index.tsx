interface RefetchButtonProps {
  refetch: () => void
}

export const RefetchButton = (props: RefetchButtonProps) => {
  const {refetch} = props
  return (
    <button className={"bg-blue-600 p-2 w-fit"} onClick={refetch}>
      refetch
    </button>
  )
}