import { dataType } from "@/types"
import OrgnisationCard from "./OrgnisationCard"

const Orgnaisations = ({ data }:
    { data: dataType }
) => {
  return (
      <div className="w-full px-[100px] py-[50px] h-fit grid grid-cols-4 gap-6">
          {
              data.orgs.map((org, index) => (
                <OrgnisationCard key={index} org={org} />
              ))
          }
    </div>
  )
}

export default Orgnaisations