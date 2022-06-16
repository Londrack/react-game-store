import { CircularIcon } from "./CircularIcon";
import { ImgSquare } from "./ImgSquare";

export default function LoadingProductList() {
  return (
    <div className='mb-2 relative blink'>
      <div className='cursor-pointer'>
        <ImgSquare rectangular={true} />
      </div>
      <div className="flex-space-between mt-2 gap-1">
        <div>
          <div className="w-45 h-3 mb-2 bg-grey-200"></div>
          <div className="w-20 h-3 mb-2 bg-grey-200"></div>
        </div>
        <div className='cursor-pointer'>
          <CircularIcon
            size="45px"
            bgColor="bg-grey-200"
            marginX="mx-0">
          </CircularIcon>
        </div>
      </div>
    </div>
  )
}
