interface ContainerProps {
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  return <div className={"flex gap-1 flex-col max-w-screen-2xl m-auto"}>{props.children}</div>
}