interface ContainerProps {
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  return (
    <div className={"m-auto flex max-w-screen-2xl flex-col gap-1"}>
      {props.children}
    </div>
  );
};
