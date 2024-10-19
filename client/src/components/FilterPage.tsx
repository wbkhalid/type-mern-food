import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"


export type filterOptionState = {
  id: string,
  label: string
}

const filterOptions: filterOptionState[] = [
  {
    id: 'burgar',
    label: 'Burger'
  },
  {
    id: 'thali',
    label: 'Thali'
  },
  {
    id: 'biryani',
    label: 'Biryani'
  },
  {
    id: 'momos',
    label: 'Momos'
  },
]

const FilterPage = () => {

  const appliedFilterHandler = (value: string) => {

  }
  return (
    <div className="md:w-72">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-lg">Filter by Cuisines</h1>
        <Button variant='link'>Reset</Button>
      </div>

      {
        filterOptions.map((option) => (
          <div className="flex items-center space-x-2 my-4">
            <Checkbox id={option.id} onClick={() => appliedFilterHandler(option.label)} />
            <Label>{option.label}</Label>
          </div>
        ))
      }

    </div>
  )
}

export default FilterPage
