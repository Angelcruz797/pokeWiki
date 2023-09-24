import { useParams } from "react-router"
import { useFetch } from "../../hook/useFetch"

export const TypeInfo = () => {
  const {id}=useParams()
  const {data,isLoading}=useFetch('type/',id)
  console.log(data)
  return (
    <div>TypeInfo</div>
  )
}
