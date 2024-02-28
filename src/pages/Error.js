import { Link } from "react-router-dom"

export default function Error() {
  return <div>
    <h1>404 error -- page not found</h1>
    <Link to={'/'}>Go Home</Link>
  </div>
}