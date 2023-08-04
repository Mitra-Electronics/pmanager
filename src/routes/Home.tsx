import '../App.css'
import Navbar from '../components/Navbar'
import { PersonProps } from '../essentials/Types'
import useDocumentTitle from '../essentials/Title'
import { useQuery } from "@tanstack/react-query"
import { getAllContacts } from '../essentials/Requests'
import Unpopulated from '../essentials/Unpopulated'
import { Link } from 'react-router-dom'

const PersonComponent = ({ id, name, country, email, birthday, github, img }: PersonProps) => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50 max-md:role">{country}</div>
          </div>
        </div>
      </td>
      <td className="max-sm:role">
        {email}
        <br />
        <span className="badge badge-ghost badge-sm max-md:role">{birthday}</span>
      </td>
      <td className="max-sm:role">{github}</td>
      <th className="max-sm:role">
        <button className="btn btn-ghost btn-xs"><Link to={'/people/'+id}>details</Link></button>
      </th>
    </tr>
  )
}

function App() {
  useDocumentTitle("Home")
  const { data, status } = useQuery({
    queryKey: ["all"],
    queryFn: () => getAllContacts(),
  })

  if (status === "loading")
    return <Unpopulated text="Loading" />

  else if (status === "error" || data === undefined)
    return <Unpopulated text="Error" />

  else if (data === null)
    return <Unpopulated text="404 Contact does not exist" />
  return (
    <>
      <Navbar />
      <div className="overflow-x-auto lg:mx-40">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th className="max-sm:role">Email</th>
              <th className="max-sm:role">Github</th>
              <th className="max-sm:role"></th>
            </tr>
          </thead>
          <tbody>
            {/*<Person name="Hart Hagerty" country="United States" email="Zemlak, Daniel and Leannon" birthday="Desktop Support Technician" github="Purple" img="https://lh3.googleusercontent.com/ogw/AGvuzYYndjzvnqcnojHTE1WBhsy9TaZbuMxZR9hpRv5ZZQ=s320-c-mo"/>
            <Person name="Brice Swyre" country="China" email="Carroll Group" birthday="Tax Accountant" github="Red" img="https://lh3.googleusercontent.com/ogw/AGvuzYYndjzvnqcnojHTE1WBhsy9TaZbuMxZR9hpRv5ZZQ=s320-c-mo"/>
            <Person name="Marjy Ferencz" country="Russia" email="Rowe-Schoen" birthday="Office Assistant I" github="Crimson" img="https://lh3.googleusercontent.com/ogw/AGvuzYYndjzvnqcnojHTE1WBhsy9TaZbuMxZR9hpRv5ZZQ=s320-c-mo"/>
  <Person name="Yancy Tear" country="Brazil" email="Wyman-Ledner" birthday="Community Outreach Specialist" github="Indigo" img="https://lh3.googleusercontent.com/ogw/AGvuzYYndjzvnqcnojHTE1WBhsy9TaZbuMxZR9hpRv5ZZQ=s320-c-mo"/>*/}
            {data.map((e) => <PersonComponent name={e.first_name+" "+e.last_name} country={e.country} email={e.email} birthday={e.birthday} github={e.github} img='https://lh3.googleusercontent.com/ogw/AGvuzYYndjzvnqcnojHTE1WBhsy9TaZbuMxZR9hpRv5ZZQ=s320-c-mo' id={e.id}/>)}
          </tbody>
          {/* foot */}
          {/*<tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
            </tfoot>*/}

        </table>
      </div>
    </>
  )
}

export default App
