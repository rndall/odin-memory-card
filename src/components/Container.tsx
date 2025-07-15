interface ContainerProps {
  children: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto px-4 sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] lg:px-8 xl:max-w-[80rem] 2xl:max-w-[96rem]">
      {children}
    </div>
  )
}

export default Container
