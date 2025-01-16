

interface RekProcessStep {
    title: string;
    children: string
}
export const RekProcessStep = ({ title, children }: RekProcessStep) => {
  return (
    <>
        <div className='w-80 h-80 flex flex-col items-center justify-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md border'>
            <h4>{title}</h4>
            <p>{children}</p>
        </div>
    </>
  )
}
