import Image from 'next/image'

export const ItemList = () => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image src="/highJumpJhowBucket.png" width={1500} height={1500} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              High jump jhow bucket
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">white</p>
        </div>
        <p className="text-sm font-medium text-gray-900">$70</p>
      </div>
    </div>
  )
}